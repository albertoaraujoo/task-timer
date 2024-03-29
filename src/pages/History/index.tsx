import { HistoryContainer, HistoryList, Status } from "./styles";

const History = () => {
  return (
    <HistoryContainer>
      <h1>My Task History</h1>
      <HistoryList>
        <table>
          <thead>
            <th>Task</th>
            <th>Duration</th>
            <th>Begin</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 days ago</td>
              <td>
                <Status statusColor="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 days ago</td>
              <td>
                <Status statusColor="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 days ago</td>
              <td>
                <Status statusColor="red">Interrupted</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 days ago</td>
              <td>
                <Status statusColor="yellow">In Progress</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};

export default History;
