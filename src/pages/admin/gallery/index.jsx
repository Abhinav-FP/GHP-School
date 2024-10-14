import Header from "../Component/Header";
import SideBarAdmin from "../Component/SideBar";
import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import Details from "@/pages/api/admin/Details";
import careerbg from "../../../../public/Career/careerbg.jpg"
import Modal from "../Component/Modal";
import Image from "../Component/Image";
import AdminLayout from "@/layout/AdminLayout";


function Index() {
    const [listing, setLisitng] = useState([]);
    const [data, setData] = useState([]); // Holds images fetched by category
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [imagedataPreview, setImageDataPreview] = useState(null);
    const [folders, setFolders] = useState(['annual Day', 'assembly', "seminars", 'activities', "festivals", 'recognition-and-awards', 'school-rooms', 'special-days', 'summer-camp' ]);
    const [selectedFolder, setSelectedFolder] = useState(null);
    const[url,setUrl]=useState("");

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const getGallery = () => {
        setLoading(true);
        const main = new Details();
        main
            .admingallery()
            .then((r) => {
                setLoading(false);
                setLisitng(r?.data?.data); // Changed `setLisitng` to `setListing`
                // if (r && r.data && r.data.data) {
                //     let arr = [];
                //     r.data.data.forEach((item) => {
                //         arr.push(item.title);
                //         console.log(item.title);
                //     });
                //     console.log("folders", arr);
                //     setFolders(arr || []);
                // } 
            })
            .catch((err) => {
                setLoading(false);
                setLisitng([]); // Changed `setLisitng` to `setListing`
                console.log("error", err);
            });
    };
    
   

    useEffect(() => {
        getGallery(); // Fetch all gallery items on mount
    }, []);
 

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length); // Loop forward through images
    };

    const handlePrevious = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + data.length) % data.length
        ); // Loop backward through images
    };

    const closeModal = () => {
        setShowModal(false); // Close modal
    };

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImagePreview(URL.createObjectURL(file));
            uploadImage(file); // Pass the file directly here
        }
    };

    const uploadImage = async (file) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID fa9cff918a9554a");
    
        const formdata = new FormData();
        formdata.append("image", file, "GHJQTpX.jpeg");
        formdata.append("type", "image");
        formdata.append("title", "Simple upload");
        formdata.append("description", "This is a simple image upload in Imgur");
    
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };
        try {
            const response = await fetch(
              "https://api.imgur.com/3/upload",
              requestOptions
            ); 
            console.log("response",response);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            } 
            const data = await response.json();
            console.log("data",data);
            if (data?.data?.link) {
                console.log("Image uploaded successfully!")
                setUrl(data.data.link)
            } else { 
                setUrl("DUMMY LINK");
                // alert("Failed to upload image.")
                // return false
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // const url = await uploadImage(selectedImage);
        // console.log("url",url);
        const record = new FormData();
        record.append("url", url);
        record.append("size", selectedImage.size);
        record.append("name", selectedImage.name);
        record.append("caption", selectedFolder);
        record.append("title", title);
        record.append("description", description); 
        try {
            const main = new Details();
            const response = await main.GalleryAdd({record});
            if (response?.data?.status) {
                // toast.success(response.data.message);
                alert(response.data.message)
                handleClose(); 
            } else {
                // toast.error(response.data.message);
                alert(response.data.message);
            }
        } catch (error) {
            console.log("error", error); 
            alert(error?.response?.data?.message || "An error occurred");
            // toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };



    

    return (<>
    <AdminLayout>
        <div className="md:flex flex-wrap bg-[#F5F6FB] listings-start">
            <SideBarAdmin />
            <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
                <Header title={"Gallery"} />
                <div className="px-4 py-2 lg:px-10 lg:py-2.5">

                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black  border-opacity-10">
                            <h3 className=" text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Gallery  </h3>
                            <button onClick={() => setIsOpen(true)} className="button-animation rounded text-white font-normal tracking-[-0.04em] text-sm font-normal py-2 px-3 xl:px-3.5  outline-none focus:outline-none ease-linear transition-all duration-150">
                                Add New Gallery
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-3 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between listings-center border-b border-black border-opacity-10">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
                                {listing &&
                                    listing.map((item, index) => (
                                        <div
                                            key={index}
                                            className="relative w-full overflow-hidden cursor-pointer"
                                            onClick={() => handleImageClick(item?.caption)}
                                        >
                                            <Image
                                                blurDataURL={`${item?.images[0] || careerbg}?q=1`}
                                                placeholder="blur"
                                                width={387}
                                                height={310}
                                                src={item?.images[0] || careerbg}
                                                alt={item?.title}
                                                className="object-cover"
                                                loading="lazy"
                                            />
                                            <div className="galleryBg absolute bottom-0 left-0 h-full w-full z-0"></div>
                                            <h3 className="capitalize absolute bottom-4 left-6 right-6 text-white z-10 merriweather-font font-normal text-xl lg:text-2xl">
                                                {item?.title ? item?.title.replace("-", " ") : ""}
                                            </h3>
                                        </div>
                                    ))}
                            </div>

                            {/* Modal */}
                            {showModal && data.length > 0 && (
                                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                                    <div className="relative w-full h-full flex justify-center items-center">
                                        <button
                                            className="absolute top-4 right-4 text-white z-10"
                                            onClick={closeModal}
                                        >
                                            <IoMdClose size={24} />
                                        </button>
                                        <button
                                            className="absolute left-4 top-[50%] transform -translate-y-1/2 text-white z-10"
                                            onClick={handlePrevious}
                                        >
                                            <GrPrevious size={24} />
                                        </button>
                                        <Image
                                            blurDataURL={`${data[currentImageIndex]?.url}?q=1`}
                                            placeholder="blur"
                                            src={data[currentImageIndex]?.url}
                                            alt={data[currentImageIndex]?.caption}
                                            layout="fill"
                                            objectFit="contain"
                                            className="max-w-full max-h-full"
                                            loading="lazy"
                                        />
                                        <button
                                            className="absolute right-4 top-[50%] transform -translate-y-1/2 text-white z-10"
                                            onClick={handleNext}
                                        >

                                            <GrNext size={20} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="relative bg-white w-full rounded-[40px] lg:rounded-[50px] m-auto">

                    <div className="  pt-6 pb-5 px-6">
                        <h2 className="text-lg lg:text-xl text-[#212121] font-semibold">Add New Gallery</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">

                            {selectedImage ? 
                            <div className="relative">
                                <button onClick={()=>setSelectedImage(false)} className="bg-red-500 px-3 text-[10px] text-white uppercase rounded-lg absolute top-2 right-2 py-2" >Remove</button>
                                <img src={URL.createObjectURL(selectedImage)} className="min-h-[230px] w-full block rounded-xl mb-4" />
                            </div>
                            :
                            <div class="flex items-center justify-center w-full">
                                <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                    <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg> 
                                        <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                        <img class="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image" />
                                        </div>
                                        <p class="pointer-none text-gray-500 "><span class="text-sm">Drag and drop</span> files here <br /> or <span class="text-blue-600 hover:underline">select a file</span> from your computer</p>
                                    </div>
                                    <input onChange={handleImageChange}  accept="image/*"  type="file" class="hidden" />
                                </label>
                            </div>}
                           
                            <div>
                                <select onChange={(e)=>setSelectedFolder(e.target.value)} className="mt-1 block w-full p-4  bg-gray-100 rounded-md shadow-sm  focus:border-[#0367F7] outline-0">
                                    <option value='' >Select Gallery Folder</option>
                                    {folders && folders.map((f,i)=>{
                                        return <>
                                         <option className="uppercase" value={f} key={`folder-${i}`}>{f.replaceAll("-", ' ')}</option>
                                         </>
                                    })}
                                </select>
                            </div>
                            <div>
                                <input type="text" placeholder="Title" name="title"  onChange={(e)=>setTitle(e.target.value)} className="mt-1 block w-full bg-gray-100 rounded-md shadow-sm p-4 focus:border-[#0367F7] outline-0"  />
                            </div>
                            <div> 
                                <textarea type="text" placeholder="Description" name="description"  onChange={(e)=>setDescription(e.target.value)} className="mt-1 block w-full bg-gray-100 rounded-md shadow-sm p-4 focus:border-[#0367F7] outline-0" />
                            </div>
                            <div className="flex justify-center">
                                <button onClick={handleSubmit} className="text-white button-animation text-sm font-normal rounded-xl w-full tracking-[-0.03em] p-3 border-0 min-w-[100px] rounded-md" >
                                    {loading ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </div>
                        </div>
                </div>
            </Modal>
            )}
        </div>
    </AdminLayout>


    </>);
}

export default Index;