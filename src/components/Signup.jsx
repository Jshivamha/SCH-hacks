import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
     username:'',
      password:'',
      phoneNumber:'',
      email:'',
      address:'',
      pincode:'',
      city:'',
      state:'',
      country:'',
      accountNumber:'',
      IFSCCode:'',
      accountHolderName:'',
      bankName:'',
      branchName:'',
      accountType:'',
      PAN:'',
      GSTIN:'',
      buisnessType:'',
      buisnessName:'',
      buisnessAddress:'',
      buisnessResgistartionNumber:'',
      buisnessPhoneNumber:'',
  });

  
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const val = type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <h2 className="text-4xl font-bold mb-4">Seller Account Registration :</h2>
        <form  onSubmit={handleSubmit}  style={{ borderColor: 'rgb(2, 2, 2)' }} >
          {/* Business Details */}
          <div className="Personal block text-2xl pb-6 font-bold mb-2">Personal Details ---</div>

          <div className="mb-4">
          <label htmlFor="businessName" className="block text-1xl font-bold mb-2" >Name</label>

            <input
              style={{ borderColor: 'rgb(2, 2, 2)' }}
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b-1" 
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,username:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Password</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Password name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,password:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Phone Number</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Phone Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,phoneNumber:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Email </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,email:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">PAN Number </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter PAN Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,PAN:e.target.value})
              
              }}
            />
          </div>
          
          
          {/*  Address*/}
         
          <div className="Personal block text-2xl pb-6 pt-3 font-bold mb-2">Address Details ---</div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Address</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Address Name"  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,address:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Pin Code</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Pin Code Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,pincode:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">City</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter City Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,city:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">State</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter State Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,state:e.target.value})
              
              }}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Country</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Country Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,country:e.target.value})
              
              }}
            />
          </div>
          
          {/* Bank detail */}

          <div className="Personal block text-2xl pb-6 pt-3 font-bold mb-2">Bank Details ---</div>

          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Bank Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Bank Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              
              onChange={e=>{
                setFormData({...formData,bankName:e.target.value})
              
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Bank Account Number</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Bank Account Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,accountNumber:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">IFSC Code</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter IFSC Code"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,IFSCCode:e.target.value})
              
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Account Holder Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Account Type"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,accountHolderName:e.target.value})
              
              }}
              
            
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Account Type</label>
            <select
              id="businessType"
              name="businessType"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessType}
              onChange={e=>{
                setFormData({...formData,accountType:e.target.value})
              
              }}
            >
              <option value="individual">Saving</option>
              <option value="partnership">Current</option>
              <option value="privateLimited">Others</option>
            </select>
          </div>
         


           {/*/* 
     
      
     
      
      
      
      buisnessPhoneNumber,*/}
          {/* Buisness Detail */}
          <div className="Personal block text-2xl pb-6 pt-3 font-bold mb-2">Business Details ---</div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-sm font-bold mb-2">Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter Business Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessName}
              onChange={e=>{
                setFormData({...formData,businessName:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessType" className="block text-sm font-bold mb-2">Business Type</label>
            <select
              id="businessType"
              name="businessType"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.businessType}
              onChange={e=>{
                setFormData({...formData,buisnessType:e.target.value})
              
              }}
            >
              <option value="individual">Individual/Sole Proprietorship</option>
              <option value="partnership">Partnership</option>
              <option value="privateLimited">Private Limited Company</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="registrationNumber" className="block text-sm font-bold mb-2">Registration Number</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="Enter Registration Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.registrationNumber}
              onChange={e=>{
                setFormData({...formData,registrationNumber:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="registrationNumber" className="block text-sm font-bold mb-2">GSTIN</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="Enter GST Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.registrationNumber}
              onChange={e=>{
                setFormData({...formData,GSTIN:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="registrationNumber" className="block text-sm font-bold mb-2">Business Address</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="Enter Business Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.registrationNumber}
              onChange={e=>{
                setFormData({...formData,buisnessAddress:e.target.value})
              
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="registrationNumber" className="block text-sm font-bold mb-2">Business Phone Number</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="Enter Phone Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // value={formData.registrationNumber}
              onChange={e=>{
                setFormData({...formData,buisnessPhoneNumber:e.target.value})
              
              }}
            />
          </div>
          
          {/* Add other input fields based on the keys */}
          {/* Example: */}
          <button
          onClick={()=> {
            navigate("/products")
          }}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
