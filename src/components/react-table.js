import React from "react";
import ReactTable from "react-table";
import firebase from "firebase";
class DataTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          c1: "",
          c2: "",
        },
      ],
    };
  }
  getData() {
    const data = [];
    const node = this.props.node;
    return firebase
      .database()
      .ref(node)
      .on("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const allData = childSnapshot.val();
          const completeData = {
            c1: (
              <a href={allData.link} target="_blank" rel="noopener noreferrer">
                {allData.num}
              </a>
            ),
            c2: allData.lesson,
          };
          data.push(completeData);
        });
        this.setState({ data });
      });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    const columns = [
      {
        Header: this.props.c1Title,
        accessor: "c1",
        width: this.props.c1Width,
        maxWidth: this.props.c1Width,
      },
      {
        Header: this.props.c2Title,
        accessor: "c2",
        width: this.props.c2Width,
        maxWidth: this.props.c2Width,
      },
    ];
    return (
      <div className="react-data-table mb-5">
        <ReactTable
          columns={columns}
          data={this.state.data}
          defaultPageSize={this.props.pageSize}
        />
      </div>
    );
  }
}

export default DataTable;
