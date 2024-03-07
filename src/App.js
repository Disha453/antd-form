

import './App.css';
import { useState } from 'react'
import { TableData } from './tableprops';


function App() {
  const [student, setStudent] = useState({ fname: "", lname: "", address: "" })
  const [data, setData] = useState(JSON.parse(localStorage.getItem("o")) || [])
  const [edit, setEdit] = useState(-1);
  const [search1, setSearch1] = useState("")


  const fontSubmit = (e) => {
    console.log(e.target.name)
    setStudent({ ...student, [e.target.name]: e.target.value })
  }


  const submit = () => {
    if (edit !== -1) {

      const update = data.map((item, index) => {
        if (edit === index) {
          return student

        }
        else { return item };
      })
      setData(update);
      localStorage.setItem("o", JSON.stringify(update));
    }

    else {
      setData([...data, student]);
      localStorage.setItem("o", JSON.stringify([...data, student]));
    }

  }
  console.log(student)
  console.log(data)


  // delete button
  const handleDelete = (indexxx) => {
    setData(data?.filter((item, index) => { return (index !== indexxx) }));
    localStorage.setItem("o", JSON.stringify(data?.filter((item, index) => { return (index !== indexxx) })))
  }


  // edit button
  const handleEdit = (indexx) => {
    setEdit(indexx);
    const record = data.find((item, index) => { return index === indexx });
    console.log(record);
    setStudent(record);
  }
  // serch button
  const search = () => {

    // const filteredData = student.filter((item) => { return (item?.userfullname?.toLocaleLowerCase() === searchValue?.toLocaleLowerCase()) });
    // console.log(filteredData);

    //include methods

    const filteredData = data.filter((item) => { return (item?.fname?.toLocaleLowerCase().includes(search1?.toLocaleLowerCase())) });
    console.log(filteredData);
    setData([...filteredData])

  }


  // sort button
  const sortFname = () => {

    const sortedData = data.sort((a, b) => { return (a.fname > b.fname ? 1 : -1) });

    setData([...sortedData])
    localStorage.setItem("disha", JSON.stringify(sortedData));


  }


  return (
    <>
      <div className="h-[950px]  bg-cover p-2.5  flex  flex-col items-center  justify-center " style={{ backgroundImage: "url(https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg)" }}>
        <div className="flex flex-col gap-[20px]">
          <div>
            <label htmlFor='fname'>Fname:</label>
            <input type='text' id='fname' name='fname' value={student.fname} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-green-500  ml-2 h-12 w-44  shadow-lg shadow-green-600 bg-transparent" />
          </div>

          <div>
            <label htmlFor='lname'>Lname:</label>
            <input type='text' id='lname' name='lname' value={student.lname} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-green-500  ml-2 h-12 w-44  shadow-lg shadow-green-600 bg-transparent" />
          </div>

          <div>
            <label htmlFor='address'>address:</label>
            <input type='text' id='address' name='address' value={student.address} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-green-500  ml-2 h-12 w-44  shadow-lg shadow-green-600 bg-transparent" />
          </div>
          <div className="flex justify-center mt-[5%]">
            <button className="bg-transparent h-12 w-24 rounded-xl  shadow-lg shadow-green-600 border-green-500  mr-[50px] mt-6 text-[15px]" onClick={submit} ><b>Submit</b></button>
          </div>
        </div>

      </div>


      <div className="flex justify-center mt-[5%] gap-[20px]">
        <button onClick={() => search()}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
            <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
          </svg></button>

        <label htmlFor='search' className="text-xl"></label>
        <input type='search' id='search' onChange={(e) => setSearch1(e.target.value)} className="bg-transparent h-8 w-36 rounded-xl  border-green-500  mr-[50px]  text-[15px]" />



        <button className="bg-transparent h-12 w-24 rounded-xl  shadow-lg shadow-green-600 border-green-500  mr-[50px] text-[15px] " onClick={() => sortFname()}><b>sort</b></button>

      </div>




      <TableData recordsData={data} handleDelete={(e) => { handleDelete(e) }} handleEdit={(e) => { handleEdit(e) }} />
    </>
  );
}

export default App;
