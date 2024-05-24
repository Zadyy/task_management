import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #555;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fafafa;
`;

const TaskTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const TaskDescription = styled.p`
  margin: 5px 0;
  color: #666;
`;

const Select = styled.select`
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchUsersAndTasks = async () => {
      const token = localStorage.getItem('token');
      const [userResponse, taskResponse] = await Promise.all([
        axios.get('/api/admin/users', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get('/api/admin/tasks', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      setUsers(userResponse.data);
      setTasks(taskResponse.data);
    };

    fetchUsersAndTasks();
  }, []);

  const handleReassignTask = async (taskId, staffId) => {
    const token = localStorage.getItem('token');
    await axios.put(
      `/api/admin/tasks/${taskId}`,
      { staffId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const response = await axios.get('/api/admin/tasks', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(response.data);
  };

  return (
    <Container>
      <Title>Admin Dashboard</Title>
      <Section>
        <SectionTitle>Manage Users</SectionTitle>
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              {user.username} - {user.role_name}
            </ListItem>
          ))}
        </List>
      </Section>
      <Section>
        <SectionTitle>Manage Tasks</SectionTitle>
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskDescription>{task.description}</TaskDescription>
              <Select
                defaultValue={task.staff_id}
                onChange={(e) => handleReassignTask(task.id, e.target.value)}
              >
                <option value="">Select staff</option>
                {users
                  .filter((user) => user.role_name === 'staff')
                  .map((staff) => (
                    <option key={staff.id} value={staff.id}>
                      {staff.username}
                    </option>
                  ))}
              </Select>
            </ListItem>
          ))}
        </List>
      </Section>
    </Container>
  );
}
