import Dashboard from "views/Dashboard.js";
import CropRecommendation from "views/CropRecommendationPage";
import { AiFillBug } from "react-icons/ai"
import { HiHome } from "react-icons/hi";
import { RiPlantFill } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi"
import DiseaseDetection from "views/DiseaseDetectionPage";
import PricePrediction from "views/PricePredictionPage";
import CrowdfundPage from "views/CrowdfundPage";
import CampaignDisplay from "views/CampaignDisplay";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HiHome/>,
    component: Dashboard,
    layout: "/user"
  },
  {
    path: "/crop_recommendation",
    name: "Crop Recommendation",
    icon: <RiPlantFill/>,
    component: CropRecommendation,
    layout: "/user"
  },
  {
    path: "/disease_detection",
    name: "Disease Detection",
    icon: <AiFillBug/>,
    component: DiseaseDetection,
    layout: "/user"
  },
  {
    path: "/price_prediction",
    name: "Price Prediction",
    icon: <FaRupeeSign/>,
    component: PricePrediction,
    layout: "/user"
  },
  {
    path: "/crowdfund",
    name: "Raise Funds",
    icon: <GiReceiveMoney/>,
    component: CrowdfundPage,
    layout: "/user"
  },
  {
    path: "/crowdfund/campaigns",
    component: CampaignDisplay,
    layout: "/user"
  }
];
export default routes;
