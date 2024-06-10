import { useState } from "react";
import "./table.css";
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    sex: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees([...employees, employee]);
    setEmployee({
      name: "",
      age: "",
      sex: "",
      mobile: "",
      email: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="container-form">
          <header>Employee Form</header>
          <form onSubmit={handleSubmit} className="form">
            <div className="input-box">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={employee.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <label>Age</label>
              <input
                type="number"
                name="age"
                placeholder="Enter age"
                value={employee.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="gender-box">
              <h3>Sex</h3>
              <div className="gender-option">
                <select name="sex" value={employee.sex} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="input-box">
              <label>Mobile</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                value={employee.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={employee.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="container-tabel mt-2" id="tableEmp">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Mobile</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {" "}
              {employees.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.sex}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cardcontainer mt-2">
          {employees.map((item, i) => {
            return (
              <>
                <div className="notification mb-2" key={i}>
                  <div className="notiglow"></div>
                  <div className="notiborderglow"></div>
                  <div className="notititle">{item.name}</div>
                  <div className="notibody">
                    Age: {item.age} &nbsp;&nbsp; Sex: {item.sex}
                  </div>
                  <div className="notibody"> {item.email}</div>
                  <div className="notibody">{item.mobile}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
