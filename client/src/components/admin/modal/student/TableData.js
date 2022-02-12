import React, { useState, useEffect } from "react";
//import MaterialTable from 'material-table'
import MaterialTable from '@material-table/core'
//import MTableToolbar from '@material-table/core'
//import Chip from '@material-table/core'
// import GetAppIcon from '@material-ui/icons/GetApp';
 //import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import { Button ,IconButton ,Menu ,MenuItem, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import CustomRow from './CustomRow';

import Axios from "axios";



function Table(props) {

    console.log('Table Rendered:')

    const [tableData, setTableData] = useState([])

    const states = useSelector(state => state.students)
    const [students, setStudents] = useState([]);
    const [loading,setLoading] = useState(true)

    const { esetOpen, dsetOpen, setId , usetOpen , uopen  } = props;

    console.log('uopen:',uopen);

    const handleEdit = (id) => {
        if(id){
            setId(id)
            esetOpen(true)
        }
       // alert(id)
    }

    const handleDelete=(id)=>{
        if(id){
            setId(id)
            dsetOpen(true)
        }
       // alert(index)
      }

    // const [tableData, setTableData] = useState([
    //       { name: "Raj", email: "Raj@gmail.com", phone: 7894561230, age: 1, gender: "M", city: "Chennai", fee: 78456 },
    //       { name: "Mohan", email: "mohan@gmail.com", phone: 7845621590, age: 35, gender: "M", city: "Delhi", fee: 456125 },
    //       { name: "Sweety", email: "sweety@gmail.com", phone: 741852912, age: 17, gender: "F", city: "Noida", fee: 458796 }
    //   ])

    // columns={[
    //     { title: 'Name', field: 'name' },
    //     { title: 'Surname', field: 'surname' },
    //     { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    //     {
    //       title: 'Birth Place',
    //       field: 'birthCity',
    //       lookup: { 34: 'Mahaplag', 63: 'Sogod' },
    //     },
    //   ]}
    const columns = [
       // {title: "ID", field: "id_number", hidden: true},
       
      // { title: 'Avatar', field: 'imageUrl', render: rowData => <img src={`${process.env.REACT_APP_API_URL}/${rowData.photo}`} style={{width: 40, height: 40, borderRadius: '50%'}}/> },
       { title: 'Avatar', field: 'imageUrl', 
            render: rowData => 
                           {

                               return (
                                <Avatar 
                                  alt='avatar'  
                                  src={`${process.env.REACT_APP_API_URL}/${rowData.photo}`} 
                                  sx={{ width: 45 , height : 45 }} 
                                  >
                                   <em style={{color:'blue'}} > {rowData.user.firstname.charAt(0)+""+rowData.user.lastname.charAt(0) } </em>
                                </Avatar> 
                               )
                           }  },
        {title: "IDNumber", field: "id_number"},
        { title: 'Firstname', field: 'user.firstname' },
        { title: 'Lastname', field: 'user.lastname' },
       // { title: 'Username', field: 'user.username' },
        { title: "Email", field: "user.email", filterPlaceholder: "filter" },
        { title: "Phone", field: "phone", align: "center" },
        { title: "Course", field: "course.description", align: "center" , emptyValue:()=><em style={{ color: 'red'}}>no course</em>   },
      //  { title: "Address", field: "address", align: "center"  },
        // { title: "Age", field: "age" },
        // { title: "Gender", field: "sex" },
        // { title: "City", field: "address", filterPlaceholder: "filter" },
        // { title: "School Fee", field: "fee", type: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 }, },
    ]

    useEffect(()=>{
        setLoading(true)  
       if(states.students){
           console.log('REDUCER STUDENT NAGBAG.O:');
            setStudents(states.students);
            // setStudents({
            //     firstname : states.students?.user?.firstname,
            //     lastname : states.students?.user?.lastname,
            //     email : states.students?.user?.email,
            //     phone : states.students?.phone
            // })
           setLoading(false)
       }
    },[states]);

    // useEffect(() => {
    //     console.log('use effect rendered')
    //     Axios.get("http://localhost:5000/students")
    //         .then(res => {
    //             setTableData(res.data)
    //         })
    //         .catch(error => {

    //             alert('errror')
    //                 //  setErrorMessage(["Cannot load user data"])
    //                 //  setIserror(true)
    //         })
    // }, [])

    // function InsertStudent(newRow) {

    //     console.log('INSERT :',newRow);
    //     // Axios.post('http://localhost:5000/students/insert', {
    //     //     newRow: newRow
    //     // }).then(() => {

    //     //     console.log('insert ')
    //     //     let tdata = [...tableData]
    //     //         // tdata.push(newRow)
    //     //     setTableData(tdata)

    //     //     // console.log('responce: '+res)
    //     //     alert('Insert Successfully')

    //     // });
    // };


    if(loading){
        return <h3>Loading...</h3>
    }

    return ( < >


<MaterialTable
     // title="Students List"
      columns = { columns }
      data = { students }
    //   actions={[
    //     {
    //       icon: 'save',
    //       tooltip: 'Save User',
    //       onClick: (event, rowData) => alert("You saved " + rowData.name)
    //     },
    //     rowData => ({
    //       icon: 'delete',
    //       tooltip: 'Delete User',
    //       onClick: (event, rowData) => alert("You want to delete " + rowData.name),
    //       //disabled: rowData.birthYear < 2000
    //     })
    //   ]}
    //parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
    //parentChildData={(row, rows) => alert('hello') }
      options={{
        actionsColumnIndex: -1,
        headerStyle: { background: "darkcyan", color: "#fff", fontSize: "15px" },
       toolbarButtonAlignment : 'left',
        selection: true,
        showTitle: false,
        exportButton: true,
      }}
    //   
 
    actions={[
            {
             tooltip: 'Remove All Selected Users',
             icon: 'delete',
             onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
            },
            {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => console.log(rowData)
            },
           {
            icon: 'download',
            tooltip: 'Upload CSV',
            isFreeAction: true,
           
            onClick: (event, row) =>  usetOpen(true) 
           },

      ]}
      components={{
        // Action: props => (
        //     <>
            
        //     </>
        //   ),
          Row: props => <CustomRow {...props} handleDelete={handleDelete} handleEdit={handleEdit}/>
        }}



    />



        {/* <MaterialTable 
        columns = { columns }
        data = { students }
        editable = {
            {
                onRowAdd: (newRow) => new Promise((resolve, reject) => {
                    InsertStudent(newRow)
                    resolve()

                }),




                onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

                    console.log('new: ' + newRow)
                    console.log('old: ' + oldRow)
                        ///  const updatedData = [...tableData]
                        //  console.log(oldRow)
                        //  updatedData[oldRow.tableData.id] = newRow
                        // console.log(newRow)
                        // setTableData(updatedData)
                    setTimeout(() => resolve(), 22500)
                }),
                onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                    const updatedData = [...tableData]
                    updatedData.splice(selectedRow.tableData.id, 1)
                    setTableData(updatedData)
                    setTimeout(() => resolve(), 1000)

                })
            }
        }
        actions = {
            [{
                //icon: () => 'Add' ,
                tooltip: "Click me",
                onClick: (e, data) => console.log(data),
                // isFreeAction:true
            }]
        }
        // onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options = {
            {
                sorting: true,
                search: true,
                //  searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
                //  filtering: true, paging: true, pageSizeOptions: [ 10, 20, 25, 50, 100], pageSize: 5,
                // paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
                exportAllData: true,
                exportFileName: "TableData",
                addRowPosition: "first",
                actionsColumnIndex: -1,
                selection: true,
                // showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
                //   disabled: rowData.age == null,
                //   // color:"primary"
                // }),
                // grouping: true, columnsButton: true,
                // rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
                headerStyle: { background: "#f44336", color: "#fff", fontSize: "15px" }
            }
        }
        title = "Student Information"
        // icons = {
        //     { Add: () => < AddIcon/> }
        // } 
        />  */}
        </ >
    )

}


export default Table