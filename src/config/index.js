export const SUPPORTED_IMAGE_FORMATS = [
  "image/webp",
  "image/svg+xml",
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/vnd.microsoft.icon",
];

export const cardData = [
  {
    id: 1,
    title: "Crypto Hero Marc 1",
    img: "ozean_Images/Images/Background (1).png",
  },
  {
    id: 2,
    title: "Crypto Hero Marc 2",
    img: "ozean_Images/Images/Background (2).png",
  },
  {
    id: 3,
    title: "Crypto Hero Marc 3",
    img: "ozean_Images/Images/Background (3).png",
  },
  {
    id: 4,
    title: "Crypto Hero Marc 4",
    img: "ozean_Images/Images/Background (4).png",
  },
  {
    id: 5,
    title: "Crypto Hero Marc 5",
    img: "ozean_Images/Images/Background (5).png",
  },
  {
    id: 6,
    title: "Crypto Hero Marc 6",
    img: "ozean_Images/Images/Background (6).png",
  },
  {
    id: 7,
    title: "Crypto Hero Marc 7",
    img: "ozean_Images/Images/Background (7).png",
  },
  {
    id: 8,
    title: "Crypto Hero Marc 8",
    img: "ozean_Images/Images/Background (8).png",
  },
];

export const collectionCardData = [
  {
    heading: "Architecture",
    description:
      "Anmutig Studio was launched as a collection of unique NFTs generated.",
    avatarImage: "ozean_Images/Images/avatar.png",
    coverImage: "ozean_Images/Images/collectionCardCoverImg1.png",
  },
  {
    heading: "Abstract Hill",
    description:
      "Anmutig Studio was launched as a collection of unique NFTs generated.",
    avatarImage: "ozean_Images/Images/avatar.png",
    coverImage: "ozean_Images/Images/collectionCardCoverImg2.png",
  },
  {
    heading: "Art",
    description:
      "Anmutig Studio was launched as a collection of unique NFTs generated.",
    avatarImage: "ozean_Images/Images/avatar.png",
    coverImage: "ozean_Images/Images/collectionCardCoverImg3.png",
  },
  {
    heading: "Photography",
    description:
      "Anmutig Studio was launched as a collection of unique NFTs generated.",
    avatarImage: "ozean_Images/Images/avatar.png",
    coverImage: "ozean_Images/Images/collectionCardCoverImg4.png",
  },
  {
    heading: "Way Photos",
    description:
      "Anmutig Studio was launched as a collection of unique NFTs generated.",
    avatarImage: "ozean_Images/Images/avatar.png",
    coverImage: "ozean_Images/Images/collectionCardCoverImg5.png",
  },
  {
    heading: "3d Photography",
    description:
      "Anmutig Studio was launched as a collection of unique NFTs generated.",
    avatarImage: "ozean_Images/Images/avatar.png",
    coverImage: "ozean_Images/Images/collectionCardCoverImg6.png",
  },
  {
    heading: "Abstract",
    description:
      "Anmutig Studio was launched as a collection of unique NFTs generated.",
    avatarImage: "ozean_Images/Images/avatar.png",
    coverImage: "ozean_Images/Images/collectionCardCoverImg7.png",
  },
  {
    heading: "Signature",
    description:
      "Anmutig Studio was launched as a collection of unique NFTs generated.",
    avatarImage: "ozean_Images/Images/avatar.png",
    coverImage: "ozean_Images/Images/collectionCardCoverImg8.png",
  },
];

export const NavListData = [
  {
    category: "Main",
    navListItemsArr: [
      { 
      text: "Dashboard",
      icon: "assets/images/dashboardicon.svg",
      // icon: "assets/images/dashboard.svg",
      link: "/dashboard" 
      },
    ],
  },
  {
    category: "Activity",
    navListItemsArr: [
      {
        text: "Order Request",
        icon: "assets/images/orderRequest.svg",
        link: "/order_Activity",
        // link: "/orderActivity",
      },
      {
        text: "Delivery",
        icon: "assets/images/delivery.svg",
        link: "/delivery_Activity",
        // link: "/deliveryActivity",
        // link: "/orderDetails",
      },
      {
        text: "Single Order",
        icon: "assets/images/singleorder.svg",
        link: "/single_order",
        // link: "/deliveryDetails",
      },
      {
        text: "Subscription",
        icon: "assets/images/subscription.svg",
        link: "/subscription",
        // link: "/trackOrder",
      },
      // { text: "Event",
      //   icon: "assets/images/event.svg",
      //   link: "/event" 
      // },
    ],
  },
  {
    category: "Products",
    navListItemsArr: [
      { text: "Cuisine", icon: "assets/images/cuisine.svg", 
      // link: "/Products" 
      link: "/cuisine" 
    },
      {
        text: "Sub Cuisine",
        icon: "assets/images/subCuisine.svg",
        // link: "/Sub_Cuisine",
        // link: "/subCuisine",
        link: "/sub_Cuisine",
      },
      {
        text: "Food Menu",
        icon: "assets/images/foodMenu.svg",
        // link: "/Food_Menu",
        link: "/food_Menu",
        // link: "/foodMenu",
      },
    ],
  },
  {
    category: "Business",
    navListItemsArr: [
      { 
        text: "Customer", 
        icon: "assets/images/customer.svg",
        link: "/customer" 
      },
      { 
        text: "Caterer", 
        icon: "assets/images/caterer.svg",
        link: "/caterer" 
      },
      { 
        text: "Driver", 
        icon: "assets/images/driver.svg",
        link: "/driver" 
      },
      {
        text: "Financial Report",
        icon: "assets/images/financialReport.svg",
        link: "/financial_Report",
        // link: "/financialReport",
      },
    ],
  },
  {
    category: "Support",
    navListItemsArr: [
      { text: "Inbox", icon: "assets/images/inbox.svg",link:"/inbox" },
      // { text: "Help Center", icon: "assets/images/helpCenter.svg",link:"/helpCenter" },
      { text: "Content Editor", icon: "assets/images/contentEditor.svg",link:"/content_Editor" },
      { text: "Email", icon: "assets/images/email.svg", link: "/email" },
      { text: "Send Notification", icon: "assets/images/sendNotification.svg",link:"/sendnotification" },
    ],
  },
  {
    category: "General",
    navListItemsArr: [
      { text: "User Role", icon: "assets/images/userRole.svg",link:"/userrole" },
      { text: "User List", icon: "assets/images/userRole.svg",link:"/userlist" },
      { text: "Settings", icon: "assets/images/userRole.svg",link:"/settings" },
    ],
  },
];

export const DashboardStatsData = [
  {
    img: "assets/images/totalUsers.svg",
    title: "510",
    subTitle: "Active customers",
  },
  {
    img: "assets/images/totalListedMenus.svg",
    title: "510",
    subTitle: "Total listed menus",
  },
  {
    img: "assets/images/activeSubscriptions.svg",
    title: "510",
    subTitle: "Active Subscription",
  },
  {
    img: "assets/images/deliveryDrivers.svg",
    title: "510",
    subTitle: "Delivery Drivers",
  },
];

export const DashboardStatsData2 = [
  {
    img: "assets/images/totalRevenue.svg",
    title: "5124.00",
    subTitle: "Total Revenue",
    title2: "200.00",
    subTitle2: "*Revenue from new order today",
  },
  {
    img: "assets/images/totalFeeGenerated.svg",
    title: "254.21",
    subTitle: "Total Fee Generated",
    title2: "34.21",
    subTitle2: "*Total fee from new order today",
  },
];

// BASE_URL for APIS
export const BASE_URL = "https://backend.eatcoast.ca/v1";
export const IMG_BASE_URL = "https://ec-backend-app-mg6rk.ondigitalocean.app";
// export const IMG_BASE_URL = "http://localhost:5055";
const token = localStorage.getItem("admin-token");
export const config = {
  Authorization: `Bearer ${token}`,
};
