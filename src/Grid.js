import React from 'react';

const Grid = ({ config, data }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        {config.map((c, index) =>
          <th>{c.title}</th>
        )}
      </tr>
    </thead>
    <tbody>
      {data.map((d, i) =>
        < tr >
          {
            config.map((c, j) =>
              <td>{!c.component ? d[c.field] :
                <>{c.component({ data: d[c.field] })}</>}
              </td>
            )
          }
        </tr>
      )}
    </tbody>
  </table >
)
export default Grid;