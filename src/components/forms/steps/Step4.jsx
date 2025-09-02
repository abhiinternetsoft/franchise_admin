import React from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Button,
  Paper,
  Chip,
} from "@mui/material";
import { GoInfo } from "react-icons/go";
import { useState } from "react";
import { useFormik } from "formik";
import Brand from "../../../assets/images/users/Brand.svg";

const Step4 = ({ formik, onBack, onNext }) => {
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete = (chipToDelete) => {
    setKeywords((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const categories = [
    "Automotive",
    "Beauty & Spas",
    "Children's Businesses",
    "Education",
    "Entertainment",
    "Fitness",
    "Food & Beverage",
    "Home Services",
    "Lodging",
    "Medical",
    "Pets",
    "Professional Services",
    "Retail",
  ];
  const subcategories = {
    Automotive: [
      "Auto Customization",
      "Auto Detailing",
      "Auto Glass Services",
      "Auto Parts & Supplies",
      "Auto Rental",
      "Auto Repair",
      "Auto Tag Agency",
      "Body Shops",
      "Car Brokers",
      "Car Dealers",
      "Car Wash",
      "Car Window Tinting",
      "Exotic Car Rental",
      "Gas Stations",
      "Mobile Dent Repair",
      "Oil Change",
      "Powdercoating",
      "Tire Change",
      "Tire Shop",
      "Towing",
      "Trailer Rental",
      "Transmission Repair",
      "Used Car Dealers",
      "Vehicle Wraps",
      "Waterless Car Wash",
      "Wheel & Rim Repair",
      "Wheels & Tire Shop",
      "Windshield Installation & Repair",
    ],
    "Beauty & Spas": [
      "Acne Treatment",
      "Barbershop",
      "Body Contouring",
      "Blow Dry/Out Services",
      "Day Spas",
      "Eyebrows",
      "Eyelashes",
      "Facial Spa",
      "Foot Care",
      "Hair Extensions",
      "Hair Loss Centers",
      "Hair Removal",
      "Hair Salon",
      "Kids Hair Salon",
      "Laser Hair Removal",
      "Makeup Artists",
      "Massage",
      "Medical Spa",
      "Men’s Hair Salon",
      "Men's Grooming",
      "Nail Salons",
      "Permanent Makeup",
      "Piercing",
      "Skin Care",
      "Sugaring",
      "Salon Suites",
      "Tanning",
      "Tattoo",
      "Teeth Whitening",
      "Threading",
      "Waxing",
      "Tattoo Removal",
    ],
    "Children's Businesses": [
      "After School Program",
      "Basketball Lessons",
      "Child Care",
      "Day Care",
      "Entertainment Center",
      "Event Planning",
      "Face Painting",
      "Music Lessons",
      "Nanny Care",
      "Party Rental",
      "Soccer Lessons",
      "Summer Camps",
      "Tennis Lessons",
      "Tutoring Center",
    ],
    Education: [
      "Art Classes",
      "Bartending School",
      "Cheese Tasting Classes",
      "Art School",
      "Children's Tutoring",
      "College Counseling",
      "Cooking Schools",
      "Cosmetology School",
      "Dance Schools",
      "Driving Schools",
      "Educational Services",
      "Firearm Training",
      "Language School",
      "Montessori School",
      "Pole Dancing Classes",
      "Preschool",
      "Private Tutoring",
      "Specialty School",
      "Speech Training",
      "Swimming Lessons",
      "Tasting Classes",
      "Test Preparation",
      "Tutoring Center",
      "Wine Tasting Classes",
    ],
    Entertainment: [
      "Arcade",
      "Archery",
      "Axe Throwing",
      "Batting Cages",
      "Bowling",
      "Challenge Courses",
      "Climbing",
      "Comedy Club",
      "Drive In Movie Theater",
      "Escape Games",
      "Event Planning",
      "Festival",
      "Golf Simulator",
      "Haunted House",
      "Laser Tag",
      "Mini Golf",
      "Movie Theater",
      "Night Club",
      "Ninja Park",
      "Obstacle Courses",
      "Paint + Sip",
      "Paintball",
      "Party Rental",
      "Photo Booths",
      "Pickle Ball",
      "Pool Hall",
      "Race Tracks",
      "Skating Rink",
      "Sky Diving",
      "Smash Room",
      "Strip Club",
      "Trampoline Park",
      "Trivia Games",
      "Virtual Reality Centers",
    ],
    Fitness: [
      "Aerial Fitness",
      "Barre Fitness",
      "Batting Cages",
      "Big Box Gym",
      "Boot Camp",
      "Boxing Gym",
      "Cardio Classes",
      "Children's Fitness",
      "Circuit Training Gym",
      "Cycling Studio",
      "Dance Studio",
      "Elderly Fitness",
      "Fitness Studio",
      "Gym",
      "Health Club",
      "Hiit Studio",
      "Hot Yoga Studio",
      "Interval Training Gym",
      "Jiu Jitsu Studio",
      "Karate",
      "Kickboxing Gym",
      "Martial Arts",
      "Mixed Martial Arts",
      "Mobile Gym",
      "Muy Thai",
      "Ninja Gym",
      "Personal Training",
      "Pilates Studio",
      "Rowing Studio",
      "Running",
      "Sauna Studio",
      "Self Defense Classes",
      "Spinning Studio",
      "Stretch Studio",
      "Women's Gym",
      "Yoga Studio",
    ],
    "Food & Beverage": [
      "Acai",
      "African Cuisine",
      "Argentinean",
      "Asian",
      "Bagel Shop",
      "Bakeries",
      "Bar",
      "Barbecue",
      "BBQ Joint",
      "Bistro Café",
      "Boba Shop",
      "Brazilian",
      "Brazilian Steakhouse",
      "Breakfast",
      "Brewery",
      "Bubble Tea",
      "Burger Joint",
      "Burgers",
      "Café",
      "Café",
      "Cafeteria",
      "Cajun",
      "Cajun Boil",
      "Cake Shop",
      "Carribean",
      "Cereal Bar",
      "Cheesteaks",
      "Chicken Shop",
      "Chicken Wings",
      "Chimney Cakes",
      "Chinese Food",
      "Chocolate Shop",
      "Churros",
      "Coffee & Tea",
      "Coffee Shop",
      "Colombian",
      "Comfort Food",
      "Convenience Store",
      "Cookies",
      "Creole",
      "Creperie",
      "Cuban",
      "Cupcakes",
      "Custom Cakes",
      "Delicatessen",
      "Dessert Shop",
      "Dim Sum",
      "Diner",
      "Donut Shop",
      "Ethical Grocery Store",
      "Farmers Market",
      "Filipino",
      "Fish Fry",
      "Focaccia Sandwich Shop",
      "Fondue",
      "Food Delivery Service",
      "French",
      "French Fry Bar",
      "Gelato",
      "German",
      "Haitian",
      "Halal",
      "Hawaiian",
      "Health Market",
      "Honduran",
      "Hot Dogs",
      "Hot Pot",
      "Ice Cream",
      "Ice Cream & Frozen Yogurt",
      "Indian Food",
      "Internet Café",
      "Israeli",
      "Italian",
      "Japanese",
      "Jewish Deli",
      "Juice Bar",
      "Juice Bar & Smoothies",
      "Kebabs",
      "Korean",
      "Korean BBQ",
      "Kosher",
      "Latin American",
      "Lounge",
      "Macarons",
      "Meat Shop",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Milk Bars",
      "Milkshake Bar",
      "Nicaraguan",
      "Nitrogen Ice Cream",
      "Noodles",
      "Organic Store",
      "Paella",
      "Paella & Tapas",
      "Pakistani",
      "Pasta",
      "Persian",
      "Pita",
      "Pizza",
      "Poke",
      "Polish",
      "Polynesian",
      "Pretzels",
      "Pub",
      "Ramen",
      "Seafood",
      "Shaved Ice",
      "Smoothie Shop",
      "Soul Food",
      "Spanish",
      "Specialty Shop",
      "Sports Bar",
      "Steakhouse",
      "Street Vendor",
      "Sub Sandwiches",
      "Sushi",
      "Sushi Bar",
      "Sushi Conveyor Belt",
      "Taco Joint",
      "Tacos",
      "Tapas Bar",
      "Tea Room",
      "Tex Mex",
      "Thai",
      "Turkish",
      "Udon",
      "Vegan",
      "Vegetarian",
      "Venezuelan",
      "Vietnamese",
      "Wine Bar",
      "Wine Tasting Room",
      "Wok",
      "Wraps",
    ],
    "Home Services": [
      "Air Duct Cleaning",
      "Appliances & Repair",
      "Artificial Turf",
      "Awnings",
      "Cabinetry",
      "Carpet Cleaning",
      "Childproofing",
      "Contractors",
      "Custom Closets",
      "Damage Restoration",
      "Decks & Railing",
      "Drywall Installation & Repair",
      "Dumpster Rental",
      "Electricians",
      "Fences & Gates",
      "Fire Protection",
      "Flooring",
      "Garage Door Repair",
      "Glass Cleaning",
      "Grout Services",
      "Gutter Services",
      "Handyman",
      "Hazardous Waste Disposal",
      "Heating & Air Conditioning/HVAC",
      "Holiday Decorating Services",
      "Home Automation",
      "Home Cleaning",
      "Home Inspectors",
      "Home Network Installation",
      "Home Staging",
      "Home Theatre Installation",
      "Home Window Tinting",
      "HVAC Service",
      "Insulation Installation",
      "Interior Design",
      "Irrigation",
      "Junk Removal & Hauling",
      "Keys & Locksmiths",
      "Lawn Services",
      "Lighting Fixtures & Equipment",
      "Marble Restoration",
      "Mobile Home Repair",
      "Mold Remdiation Service",
      "Moving Service",
      "Painting Service",
      "Pest Control Service",
      "Plumbing",
      "Pool & Hot Tub Service",
      "Pool Cleaners",
      "Pressure Washers",
      "Property Management",
      "Residential Cleaning",
      "Roofing",
      "Security Systems",
      "Self Storage Service",
      "Shades & Blinds",
      "Shutters",
      "Solar Installation",
      "Solar Panel Cleaning",
      "Storage Container Company",
      "Stucco Service",
      "Tile + Grout Restoration",
      "Tree Service",
      "TV Mounting Service",
      "Wildlife Control",
      "Window Cleaning Service",
      "Windows + Doors Installation",
    ],
    Lodging: [
      "Bed & Breakfast",
      "Boutique Hotel",
      "Eco Lodge",
      "Glamping",
      "Hostel",
      "Hotel",
      "Motel",
      "RV Park",
      "Vacation Rentals",
    ],
    Medical: [
      "ABA Therapy Practice",
      "Acupuncture Practice",
      "Addiction Recovery Center",
      "Alternative Medicine",
      "Assisted Living Facility",
      "Audiology Practice",
      "Behavioral Health Care",
      "Cannabis Clinic",
      "Cardiology",
      "Chiropractor",
      "Colonics",
      "Concierge Medical Practice",
      "Cosmetic Dentistry",
      "Cosmetic Surgeons",
      "Counseling & Mental Health",
      "Cryotherapy",
      "Dentistry Practice",
      "Dermatology Practice",
      "Detox Clinic",
      "Diagnostic Imaging",
      "Drug Testing Lab",
      "Eyecare",
      "Family Practice",
      "General Dentistry Practice",
      "Hair Loss Clinic",
      "Hearing Aids",
      "Home Health Care",
      "Hyperbaric Chamber",
      "Laboratory Testing",
      "Medical Billing",
      "Medical Marijuana Center",
      "Medical Nail Salon",
      "Medical Spa",
      "Mental Health Clinic",
      "Mobile Clinic",
      "Naturopathic/Holistic Care",
      "Optical",
      "Oxygen Bar",
      "Pain Management Clinic",
      "Pediatric Dentists",
      "Pediatric Practice",
      "Physical Therapy Practice",
      "Plastic Surgery Center",
      "Preventive Medicine",
      "Psychiatry Practice",
      "Psychology Practice",
      "Senior Care",
      "Sex Therapy Clinic",
      "Skilled Nursing",
      "Sleep Clinic",
      "Sports Medicine",
      "Stretch Studio",
      "Tattoo Removal Studio",
      "Urgent Care Center",
      "Walk In Clinic",
      "Weight Loss Clinic",
      "Weightloss",
      "Wound Care",
    ],
    Pets: [
      "Animal Physical Therapy",
      "Dog Walkers",
      "Emergency Pet Hospital",
      "Mobile Pet Grooming",
      "Pet Groomers",
      "Pet Hotel",
      "Pet Salon",
      "Pet Services",
      "Pet Sitting",
      "Pet Stores",
      "Pet Training",
      "Pet Transportation",
      "Pet Waste Removal",
      "Poop Cleaning",
      "Veterinarians",
      "Wildlife Removal",
    ],
    "Professional Services": [
      "Accident Assistance",
      "Accountanting Firm",
      "Architectural Firm",
      "Boat Repair",
      "Bookkeepers",
      "Business Brokers",
      "Business Consulting",
      "Commerical Cleaning",
      "Credit Repair",
      "Debt Repair",
      "Executive Offices",
      "Insurance",
      "IT Services",
      "Law Practice",
      "Life Coach",
      "Marketing Agency",
      "Matchmakers",
      "Office Cleaning",
      "Powdercoating",
      "Power Washing",
      "Private Investigation",
      "Process Server",
      "Property Management",
      "Public Adjusting Firm",
      "Real Estate",
      "Security Services",
      "Shared Office Space",
      "Shredding Services",
      "Signs",
      "Staffing Services",
      "Tax Preparation",
      "Title Company",
      "Travel Agency",
    ],
    Retail: [
      "Accessories Store",
      "Adult Store",
      "Appliance Store",
      "Arts & Crafts Store",
      "Baby Store",
      "Battery Store",
      "Bespoke Clothing Store",
      "Bike Store",
      "Book Store",
      "Bridal Store",
      "Candle Stores",
      "Cannabis Dispensary",
      "Check Cashing Store",
      "Children’s Clothing Store",
      "Christmas Trees",
      "Clothing Rental",
      "Computer Store",
      "Consignment Store",
      "Convenience Store",
      "Cosmetics & Beauty Supply Store",
      "Costume Store",
      "Dance Wear",
      "Discount Store",
      "Drone Store",
      "Dry Cleaner",
      "Electronics Store",
      "Executive Offices",
      "Eyewear Store",
      "Fashion Store",
      "Fireworks Store",
      "Fitness/Exercise Equipment Store",
      "Florist",
      "Flowers & Gifts Store",
      "Formal Wear Store",
      "Framing Store",
      "Furniture Store",
      "Garden Store",
      "Gift Shop",
      "Gold Buyers",
      "Golf Equipment Store",
      "Grocery Store",
      "Guns & Ammo Store",
      "Hardware Store",
      "Head Shop",
      "Hobby Shop",
      "Holiday Decorations",
      "Home & Garden Store",
      "Home Decor",
      "Hookah Bar",
      "Hot Tub & Pool Store",
      "Hunting & Fishing Store",
      "Jewelry Store",
      "Kitchen & Bath Store",
      "Laundromat",
      "Leather Goods Store",
      "Lighting Store",
      "Lingerie Store",
      "Luggage Store",
      "Mailbox Center",
      "Mattress Store",
      "Medical Supplies Store",
      "Men’s Clothing Store",
      "Military Surplus Store",
      "Mobile Phone Accessories Store",
      "Mobile Phone Store",
      "Office Equipment Store",
      "Organic Store",
      "Outdoor Furniture Store",
      "Outdoor Gear",
      "Outlet Stores",
      "Paint Store",
      "Paintball Store",
      "Pawn Shop",
      "Perfume Store",
      "Pharmacy",
      "Plus Size Fashion Store",
      "Pop-up Shop",
      "Print Shop",
      "Pumpkin Patches",
      "Rug Stores",
      "Self Storage",
      "Shared Office Spaces",
      "Sheds Store",
      "Shoe Stores",
      "Skate Shop",
      "Ski & Snowboard Shop",
      "Sneaker Store",
      "Souvenir Shop",
      "Spiritual Shop",
      "Sporting Goods Store",
      "Sporting Goods Store",
      "Storage Facility",
      "Sunglass Store",
      "Surf Shop",
      "Swimwear Store",
      "Thrift Store",
      "Tobacco Shop",
      "Toy Stores",
      "Traditional Clothing Store",
      "Trophy Shop",
      "Uniform Store",
      "Vape Shop",
      "Video Game Store",
      "Vitamins & Supplements Store",
      "Wholesale Store",
      "Wigs Store",
      "Women’s Clothing Store",
    ],
  };

  const selectedSubcategories = subcategories[formik.values.category] || [];

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, borderRadius: 2 }}
      className="shadow-none border mb-4 Listing-stepforms"
    >
      {/* Header */}
      <Box mb={3}>
        <Box
          sx={{
            borderRadius: "50%",
            // bgcolor: "primary.main",
            color: "#535364",
            display: "flex",
            alignItems: "center",
            mr: 2,
            gap: "10px",
          }}
        >
          <img src={Brand} alt="Brand" />
          <Typography variant="h6 steps-heading">Brand Overview</Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Provide comprehensive brand description and categorization.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* About Us */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <label htmlFor="About Us Description" className="listing-form-label">
            About Us Description
          </label>
          <TextField
            fullWidth
            name="aboutUs"
            placeholder="Enter your brand about us description"
            multiline
            rows={5}
            value={formik.values.aboutUs}
            onChange={(e) => {
              const words = e.target.value.trim().split(/\s+/);
              if (words.length <= 200) {
                formik.setFieldValue("aboutUs", e.target.value);
              }
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.aboutUs && Boolean(formik.errors.aboutUs)}
            helperText={`${formik.values.aboutUs.trim() === "" ? 0 : formik.values.aboutUs.trim().split(/\s+/).length} / 200 words`}
            // error={formik.touched.aboutUs && Boolean(formik.errors.aboutUs)}
          />
        </Grid>

        {/* Category */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <label htmlFor="Category" className="listing-form-label">
            Industry
          </label>
          <TextField
            select
            fullWidth
            name="category"
            placeholder="test"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.category && Boolean(formik.errors.category)}
            SelectProps={{
              displayEmpty: true, // 👈 this makes the placeholder visible in the box
            }}
          >
            {/* Placeholder */}
            <MenuItem value="" disabled>
              Select Industry
            </MenuItem>

            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Subcategory */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <label htmlFor="Subcategory" className="listing-form-label">
            Category
          </label>
          <TextField
            select
            fullWidth
            name="subcategory"
            value={formik.values.subcategory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={!formik.values.category}
            error={
              formik.touched.subcategory && Boolean(formik.errors.subcategory)
            }
            SelectProps={{
              displayEmpty: true, // 👈 this makes the placeholder visible in the box
            }}
          >
            {/* Placeholder */}
            <MenuItem value="" disabled>
              Select Category
            </MenuItem>

            {selectedSubcategories.map((sub) => (
              <MenuItem key={sub} value={sub}>
                {sub}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Business Model */}
        {/* <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <label htmlFor="Business Model" className="listing-form-label">
            Business Model
          </label>
          <TextField
            select
            fullWidth
            name="businessModel"
            value={formik.values.businessModel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.businessModel &&
              Boolean(formik.errors.businessModel)
            }
            SelectProps={{
              displayEmpty: true, 
            }}
          >
            
            <MenuItem value="" disabled>
              Business Model
            </MenuItem>

            {businessModels.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </TextField>
        </Grid> */}

        {/* Keywords */}
        {/* <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <label htmlFor="Keywords" className="listing-form-label">
            Keywords
          </label>
          <TextField
            fullWidth
            name="keywords"
            value={formik.values.keywords}
            onChange={(e) => {
              formik.handleChange(e);
              if (e.target.value.trim() !== "") {
                setOpenSnackbar(true); // show popup
              }
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.keywords && Boolean(formik.errors.keywords)}
          />
        </Grid> */}

        <Box sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <label htmlFor="Keywords" className="listing-form-label">
            Keywords
          </label>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "6px",
            }}
          >
            {formik.values.keywords.map((keyword, index) => (
              <Chip
                key={index}
                label={keyword}
                onDelete={() => {
                  const updated = formik.values.keywords.filter(
                    (_, i) => i !== index
                  );
                  formik.setFieldValue("keywords", updated);
                }}
                sx={{
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ccc",
                }}
              />
            ))}

            <TextField
              variant="standard"
              placeholder="Enter keywords"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputValue.trim() !== "") {
                  e.preventDefault();
                  formik.setFieldValue("keywords", [
                    ...formik.values.keywords,
                    inputValue.trim(),
                  ]);
                  setInputValue("");
                }
              }}
              sx={{ flex: 1, minWidth: "100px" }}
              InputProps={{ disableUnderline: true }}
            />
          </Box>

          {formik.touched.keywords && formik.errors.keywords && (
            <Typography color="error" variant="body2">
              {formik.errors.keywords}
            </Typography>
          )}
        </Box>
      </Grid>

      {/* Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        {/* <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button> */}
        {/* <Button variant="contained" onClick={onNext}>
          Skip Button
        </Button> */}
      </Box>
    </Paper>
  );
};

export default Step4;
