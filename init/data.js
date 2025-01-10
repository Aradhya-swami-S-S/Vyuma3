const sampleListings = [
  {
    title: "Angsana Oasis Spa and Resort",
    description: "A 4 Star located in Bangalore, Karnataka.",
    image: {
      filename: "hotel_image",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSjo5VscOcVWr8oFxeV53ZtUR1u-kzO3lxA&s"
    },
    price: 2000,
    location: "Bangalore",
    country: "India"
  },
    {
      title: "Royal Orchid Central",
      description: "A 4 Star located in Bangalore, Karnataka.",
      image: {
        filename: "hotel_image",
        url: "https://pix10.agoda.net/hotelImages/49178/-1/47321b7e47c3582bbf3a65eb0fdcc493.jpg?ce=0&s=414x232"
      },
      price: 2700,
      location: "Bangalore",
      country: "India"
    },
    {
      title: "REGENTA RESORT BELGAVI",
      description: "A 5 Star located in Belgaum, Karnataka.",
      image: {
        filename: "hotel_image",
        url: "https://pix10.agoda.net/property/36770667/0/4f5da8677e9af334b9d78b19585cdf01.jpg?ce=0&s=414x232"
      },
      price: 1300,
      location: "Belgaum",
      country: "India"
    },
    {
      title: "The Tamara Coorg",
      description: "A 5 Star located in Madikeri, Karnataka.",
      image: {
        filename: "hotel_image",
        url: "https://www.skywaytour.com/media/gallery/367-2021-09-15-04-17-27-thetamaracoorg2.jpg"
      },
      price: 1800,
      location: "Madikeri",
      country: "India"
    },
    {
      title: "Radisson Blu Plaza Hotel Mysore",
      description: "A 5 Star located in Mysore, Karnataka.",
      image: {
        filename: "hotel_image",
        url: "https://staging.blessingsonthenet.com/img/uploads/hotels/aim_bn_1440067881.jpg"
      },
      price: 2500,
      location: "Mysore",
      country: "India"
    },
    {
      title: "JAYA TOURIST HOME",
      description: "A 3 Star located in Paravoor, Kerala.",
      image: {
        filename: "hotel_image",
        url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/hotelier-images/89/5d/9e654098015c197b7f61029747b1aa552f5a9792eed6771641ad9a54cace.jpeg"
      },
      price: 1500,
      location: "Paravoor",
      country: "India"
    },
    {
      title: "Ramee Guestline Hotel",
      description: "A 4 Star located in Mumbai, Maharashtra.",
      image: {
        filename: "hotel_image",
        url: "https://pix10.agoda.net/property/30116870/0/d7d4bb6abd2ce5e6e61147ecfafb8907.jpg?ce=0&s=414x232"
      },
      price: 3300,
      location: "Mumbai",
      country: "India"
    },
    {
      title: "The Fern Royal Farm Resort",
      description: "A 4 Star located in Anjar, Gujarat.",
      image: {
        filename: "hotel_image",
        url: "https://media.easemytrip.com/media/hotel/shl-20091278410023/common/commonhhcpox.jpg"
      },
      price: 2200,
      location: "Anjar",
      country: "India"
    },
    {
      title: "Sardar Sarovar Resort",
      description: "A 4 Star located in Kevadiya, Gujarat.",
      image: {
        filename: "hotel_image",
        url: "https://images.trvl-media.com/lodging/63000000/62590000/62585000/62584968/a9fc7c97.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
      },
      price: 1900,
      location: "Kevadiya",
      country: "India"
    },
    {
      title: "Vascodagama Beach Resort",
      description: "A 4 Star located in Calicut, Kerala.",
      image: {
        filename: "hotel_image",
        url: "https://cdn2.advanceinfotech.org/kozhikode.directory/1200x675/business/1058/vascoda-gama-beach-resort-kappad9-1641296627.webp"
      },
      price: 2200,
      location: "Calicut",
      country: "India"
    },
    {
      title: "ROYAL ORCHID BEACH RESORT AND SPA",
      description: "A 5 Star located in Salcette, Goa.",
      image: {
        filename: "hotel_image",
        url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/88/4b/01ed890acf92c36612e041860f74cc166105c8dd0eef29fde175bbf5cddf.jpeg"
      },
      price: 3300,
      location: "Salcette",
      country: "India"
    },
    {
      title: "Hyatt Regency Gurgaon",
      description: "A 5 Star located in Gurgaon, Haryana.",
      image: {
        filename: "hotel_image",
        url: "https://pix10.agoda.net/hotelImages/2289463/0/80e644fd7bb516009d5fb36035561b92.jpg?ca=27&ce=0&s=414x232"
      },
      price: 1200,
      location: "Gurgaon",
      country: "India"
    },
    {
      title: "Wildflower Hall",
      description: "A 5 Star located in Shimla, Himachal Pradesh.",
      image: {
        filename: "hotel_image",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/dd/51/cc/wildflower-hall-shimla.jpg?w=700&h=-1&s=1"
      },
      price: 1800,
      location: "Shimla",
      country: "India"
    },
    {
      title: "The Oberoi Amarvilas",
      description: "A 5 Star located in Agra, Uttar Pradesh.",
      image: {
        filename: "hotel_image",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/dd/51/cc/wildflower-hall-shimla.jpg?w=700&h=-1&s=1"
      },
      price: 3000,
      location: "Agra",
      country: "India"
    },
    {
      title: "Taj Exotica Resort and Spa Andamans",
      description: "A 5 Star located in Havelock Island, Andaman And Nicobar.",
      image: {
        filename: "hotel_image",
        url: "https://www.remotelands.com/storage/media/1937/conversions/b190124011-banner-size.jpg"
      },
      price: 2000,
      location: "Havelock Island",
      country: "India"
    },
    {
      title: "SAMROHA RESORT",
      description: "A 5 Star located in Chalakudy, Kerala.",
      image: {
        filename: "hotel_image",
        url: "https://www.weddingpullav.com/wp-content/uploads/2021/08/samroja-resort-athirappilly-04.jpg"
      },
      price: 1500,
      location: "Chalakudy",
      country: "India"
    },
    {
      title: "HYATT REGENCY",
      description: "A 5 Star located in Thrissur, Kerala.",
      image: {
        filename: "hotel_image",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/82/11/ea/exterior-day.jpg?w=700&h=-1&s=1"
      },
      price: 2500,
      location: "Thrissur",
      country: "India"
    },
    {
      title: "Seyfert Sarovar Premiere",
      description: "A 5 Star located in Dehradun, Uttarakhand.",
      image: {
        filename: "hotel_image",
        url: "https://pix10.agoda.net/hotelImages/41085589/-1/8872706e16d9f000b9fc7ef300bd2289.jpg?ce=0"
      },
      price: 1750,
      location: "Dehradun",
      country: "India"
    },
    {
      title: "Hotel Taj Krishna",
      description: "A 5 Star located in Hyderabad, Telangana.",
      image: {
        filename: "hotel_image",
        url: "https://assets.cntraveller.in/photos/60b9fd97e1b212c19a816daa/16:9/w_1024%2Cc_limit/H0XXD_27650432_H0XXDL07-401261464-1366x768.jpg"
      },
      price: 2300,
      location: "Hyderabad",
      country: "India"
    },
    {
      title: "Hyatt Regency Ludhiana",
      description: "A 5 Star located in Ludhiana, Punjab.",
      image: {
        filename: "hotel_image",
        url: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://media.iceportal.com/49857/photos/63868059_XL/Hyatt-Regency-Ludhiana-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto"
      },
      price: 2500,
      location: "Ludhiana",
      country: "India"
    }
];

module.exports = { data: sampleListings };