// import React, { useState } from "react";
// import {
//     GoogleMap,
//     LoadScript,
//     Marker
// } from "@react-google-maps/api";

// const containerStyle = {
//     width: "100%",
//     height: "400px"
// };

// const center = { lat: 24.8607, lng: 67.0011 };

// const categories = {
//     all: "",
//     schools: "school",
//     hospitals: "hospital",
//     restaurants: "restaurant",
//     malls: "shopping_mall"
// };

// export default function Location() {
//     const [activeCategory, setActiveCategory] = useState("all");
//     const [places, setPlaces] = useState([]);

//     const handleCategory = (cat) => {
//         setActiveCategory(cat);
//         fetchNearbyPlaces(categories[cat]);
//     };

//     const fetchNearbyPlaces = (type) => {
//         const request = {
//             location: center,
//             radius: 3000,
//             type: type !== "" ? type : undefined
//         };

//         const service = new window.google.maps.places.PlacesService(
//             document.createElement("div")
//         );

//         service.nearbySearch(request, (results, status) => {
//             if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//                 setPlaces(results);
//             }
//         });
//     };

//     return (
//         <LoadScript googleMapsApiKey="AIzaSyAKMKjaPSy6LLW4vBiCmj-tV6xT3eNWaKk" libraries={["places"]}>
//             {/* CATEGORY BUTTONS */}
//             <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
//                 <button onClick={() => handleCategory("all")}>All</button>
//                 <button onClick={() => handleCategory("schools")}>Schools</button>
//                 <button onClick={() => handleCategory("hospitals")}>Hospitals</button>
//                 <button onClick={() => handleCategory("restaurants")}>Restaurants</button>
//                 <button onClick={() => handleCategory("malls")}>Shopping Malls</button>
//             </div>

//             {/* MAP */}
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={14}
//             >
//                 {places.map((place, i) => (
//                     <Marker
//                         key={i}
//                         position={{
//                             lat: place.geometry.location.lat(),
//                             lng: place.geometry.location.lng()
//                         }}
//                     />
//                 ))}
//             </GoogleMap>
//         </LoadScript>
//     );
// }



import React, { useState } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker
} from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px"
};

// 👉 Your received location link
// Example: const locationlink = "https://maps.app.goo.gl/pnjYGMy2XxGYcmRz8";
const locationlink = "https://maps.app.goo.gl/pnjYGMy2XxGYcmRz8";

// 👉 Default center (Karachi)
const center = { lat: 24.8607, lng: 67.0011 };

const categories = {
    all: "",
    schools: "school",
    hospitals: "hospital",
    restaurants: "restaurant",
    malls: "shopping_mall"
};

export default function Location() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [places, setPlaces] = useState([]);

    const handleCategory = (cat) => {
        setActiveCategory(cat);
        fetchNearbyPlaces(categories[cat]);
    };

    const fetchNearbyPlaces = (type) => {
        const request = {
            location: center,
            radius: 3000,
            type: type !== "" ? type : undefined
        };

        const service = new window.google.maps.places.PlacesService(
            document.createElement("div")
        );

        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setPlaces(results);
            }
        });
    };

    return (
        <>
            {/* ⭐ SHOW EXACT LOCATION USING IFRAME */}
            {/* <div style={{ marginBottom: "20px" }}>
                <iframe
                    src={locationlink}
                    width="100%"
                    height="350"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div> */}

            <LoadScript googleMapsApiKey="AIzaSyAKMKjaPSy6LLW4vBiCmj-tV6xT3eNWaKk" libraries={["places"]}>
                {/* CATEGORY BUTTONS */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <button onClick={() => handleCategory("all")}>All</button>
                    <button onClick={() => handleCategory("schools")}>Schools</button>
                    <button onClick={() => handleCategory("hospitals")}>Hospitals</button>
                    <button onClick={() => handleCategory("restaurants")}>Restaurants</button>
                    <button onClick={() => handleCategory("malls")}>Shopping Malls</button>
                </div>

                {/* GOOGLE MAP WITH NEARBY PLACES */}
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                >
                    {places.map((place, i) => (
                        <Marker
                            key={i}
                            position={{
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng()
                            }}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>
        </>
    );
}

