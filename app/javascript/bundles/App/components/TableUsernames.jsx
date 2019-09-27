import PropTypes from "prop-types";
import React from "react";

function TableUsernames(props) {
  const { usernames, width } = props;

  if (!(usernames instanceof Array) || usernames.length === 0) {
    return;
  }

  let domRows = [];
  let domCells = [];

  usernames.forEach((username, idx) => {
    domCells.push(
      <td className="p-3" key={username}>
        {username}
      </td>
    );

    if (idx !== 0 && (idx % (width - 1) === 0 || idx == usernames.length - 1)) {
      ;
      domRows.push(<tr key={idx / (width - 1)}>{domCells}</tr>);
      domCells = [];
    }
  });

  return (
    <table>
      <tbody>{domRows}</tbody>
    </table>
  );
}

TableUsernames.defaultProps = {
  width: 4
};

export default TableUsernames;
