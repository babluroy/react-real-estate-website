import React, { useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import { Form, Col, Button, Container, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {Redirect} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/navbar";
import { database, storage } from "../config";
import firebase from 'firebase'
import imageCompression from 'browser-image-compression';
import {imageConfig} from '../utils/imageConfig'

export default function BecomeHost() {

  //form submission
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [per_night, setPer_night] = useState("");
  const [per_week, setPer_week] = useState("");
  const [per_month, setPer_month] = useState("");
  const [per_year, setPer_year] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [about, setAbout] = useState("");
  const [userUid, setUserUid] = useState("")
  const [imageOneURL, setImageOneURL] = useState("");
  const [imageTwoURL, setImageTwoURL] = useState("");
  const [imageThreeURL, setImageThreeURL] = useState("");
  const [imageFourURL, setImageFourURL] = useState("");
  //progress status

  //form submit status
  const [submit, setSubmit] = useState("")
  console.log(submit)


    //Authstate
    const [authState, setAuthState ] = useState("");

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (!user) {
            setAuthState("Logged-out")
          }else{
            setAuthState("Logged-in")
            setUserUid(user.uid)
            setEmail(user.email)
            setName(user.displayName)
          }
        });
      }, [])



  //image 1 function
    async  function uploadImageFirst(e) {

      const imageFile = e.target.files[0];
     
    
      try {
        const compressedFile1 = await imageCompression(imageFile, imageConfig);
    
        await uploadToServer(compressedFile1); // write your own logic

        function uploadToServer(){
          const imageOne = compressedFile1;
          const uploadTask = storage.ref(`images/${imageOne.name}`).put(imageOne);
          uploadTask.on(
            "STATE_CHANGED",
            (snapshot) => {
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              toast("First Image is Uploading:Please Wait", { type: "warning" , toastId: "1", });
              if(progress === 100){
                toast.update("1", {
                  render: "First Image Upload Done",
                  type: "success",
                  autoClose: 5000
                });
              }
            },
            (error) => {
              console.log(error);
              toast(error, {type: "error"})
            },
            () => {
              storage
                .ref("images")
                .child(imageOne.name)
                .getDownloadURL()
                .then((url) => {
                setImageOneURL(url);
                });
            }
          );
        }

      } catch (error) {
        toast(error, {type: "error"})
      }
  };


   //image 2 function
   async  function uploadImageSecond(e) {

    const imageFile = e.target.files[0];
  
    try {
      const compressedFile1 = await imageCompression(imageFile, imageConfig);
  
      await uploadToServer(compressedFile1); // write your own logic

      function uploadToServer(){
        const imageOne = compressedFile1;
        const uploadTask = storage.ref(`images/${imageOne.name}`).put(imageOne);
        uploadTask.on(
          "STATE_CHANGED",
          (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            toast("Second Image is Uploading:Please Wait", { type: "warning" , toastId: "1", });
            if(progress === 100){
              toast.update("1", {
                render: "Second Image Upload Done",
                type: "success",
                autoClose: 5000
              });
            }
          },
          (error) => {
            console.log(error);
            toast(error, {type: "error"})
          },
          () => {
            storage
              .ref("images")
              .child(imageOne.name)
              .getDownloadURL()
              .then((url) => {
              setImageTwoURL(url);
              });
          }
        );
      }

    } catch (error) {
      toast(error, {type: "error"})
    }

};


   //image 3 function
   async  function uploadImageThird(e) {
      
    const imageFile = e.target.files[0];
  
    try {
      const compressedFile1 = await imageCompression(imageFile, imageConfig);
  
      await uploadToServer(compressedFile1); // write your own logic

      function uploadToServer(){
        const imageOne = compressedFile1;
        const uploadTask = storage.ref(`images/${imageOne.name}`).put(imageOne);
        uploadTask.on(
          "STATE_CHANGED",
          (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            toast("Third Image is Uploading:Please Wait", { type: "warning" , toastId: "1", });
            if(progress === 100){
              toast.update("1", {
                render: "Third Image Upload Done",
                type: "success",
                autoClose: 5000
              });
            }
          },
          (error) => {
            console.log(error);
            toast(error, {type: "error"})
          },
          () => {
            storage
              .ref("images")
              .child(imageOne.name)
              .getDownloadURL()
              .then((url) => {
              setImageThreeURL(url);
              });
          }
        );
      }

    } catch (error) {
      toast(error, {type: "error"})
    }

};

 //image 3 function
 async  function uploadImageFourth(e) {
      
  const imageFile = e.target.files[0];

  try {
    const compressedFile1 = await imageCompression(imageFile, imageConfig);

    await uploadToServer(compressedFile1); // write your own logic

    function uploadToServer(){
      const imageOne = compressedFile1;
      const uploadTask = storage.ref(`images/${imageOne.name}`).put(imageOne);
      uploadTask.on(
        "STATE_CHANGED",
        (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          toast("Fourth Image is Uploading:Please Wait", { type: "warning" , toastId: "1", });
          if(progress === 100){
            toast.update("1", {
              render: "Fourth Image Upload Done",
              type: "success",
              autoClose: 5000
            });
          }
        },
        (error) => {
          console.log(error);
          toast(error, {type: "error"})
        },
        () => {
          storage
            .ref("images")
            .child(imageOne.name)
            .getDownloadURL()
            .then((url) => {
            setImageFourURL(url);
            });
        }
      );
    }

  } catch (error) {
    toast(error, {type: "error"})
  }

};


  //Option values
  function handleChange(event) {
    setCategory(event.target.value);
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    database.ref("properties").push({
      name: name,
      email: email,
      category: category,
      city: city,
      address: address,
      title: title,
      per_night: per_night,
      per_week: per_week,
      per_month: per_month,
      per_year: per_year,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      about: about,
      userUid: userUid,
      imageOneURL: imageOneURL,
      imageTwoURL: imageTwoURL,
      imageThreeURL: imageThreeURL,
      imageFourURL: imageFourURL,
    });
    toast("Posted Successfully", { type: "success" });
    setSubmit("Submitted")
  };

  //Redirect after form submission
  if(submit === "Submitted"){
    return (
      <>
         <Redirect to="/done-posting-home" />
      </>
    )
  }


  if(authState === "Logged-out"){
    return (
      <>
         <Redirect to="/" />
      </>
    )
  }

  return (
    
    <div className="become-host">
    
      <Navbar />

      {/* Post form */}
      <ToastContainer 
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
     
        <Card className="become-host-card">
        <Card.Header className="text-center font-weight-bold become-host-card-header">Become a Host</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGriName">
                  <Form.Label>Name </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option value="Personal Rooms">Personal Rooms</option>
                    <option value="Family Apartments">Family Apartments</option>
                    <option value="Villas For Vacation">
                      Villas For Vacation
                    </option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group
                  as={Col}
                  lg={6}
                  md={6}
                  sm={12}
                  controlId="formGridAddress1"
                >
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Property Title</Form.Label>
                <Form.Control
                  placeholder="Eg. Amazing Apartment With Sea View"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Row>
                <Form.Group
                  as={Col}
                  lg={3}
                  md={3}
                  sm={12}
                  controlId="formGridZip"
                >
                  <Form.Label>Price Per Night</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Eg. 1500"
                    value={per_night}
                    onChange={(e) => setPer_night(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  lg={3}
                  md={3}
                  sm={12}
                  controlId="formGridZip"
                >
                  <Form.Label>Price Per Week</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Eg. 7000"
                    value={per_week}
                    onChange={(e) => setPer_week(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  lg={3}
                  md={3}
                  sm={12}
                  controlId="formGridZip"
                >
                  <Form.Label>Price Per Month</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Eg. 25000"
                    value={per_month}
                    onChange={(e) => setPer_month(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  lg={3}
                  md={3}
                  sm={12}
                  controlId="formGridZip"
                >
                  <Form.Label>Price Per Year</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Eg. 650000"
                    value={per_year}
                    onChange={(e) => setPer_year(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} lg={6} md={6} sm={12}>
                  <Form.Label>Bedrooms</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Eg. 2"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} lg={6} md={6} sm={12}>
                  <Form.Label>Bathrooms</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Eg. 1"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Label>Upload Property Images</Form.Label>
              <br />
              <Form.Row>
                <Form.Group as={Col} lg={3} md={3} sm={3}>
                  <Form.File onChange={uploadImageFirst} />
                </Form.Group>
                <Form.Group as={Col} lg={3} md={3} sm={3}>
                  <Form.File onChange={uploadImageSecond}/>
                </Form.Group>
                <Form.Group as={Col} lg={3} md={3} sm={3}>
                  <Form.File onChange={uploadImageThird} />
                </Form.Group>
                <Form.Group as={Col} lg={3} md={3} sm={3}>
                  <Form.File onChange={uploadImageFourth}/>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>About this listing</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" className="btn btn-block" type="submit">
                Post My Property
              </Button>
              <br/>
              <br/>
            </Form>
          </Card.Body>
        </Card>
     
    </div>
  );
}