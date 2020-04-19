const hindi = {
    add_farmer      :"किसान जोड़े",
    order_history   :"आर्डर",
    business        :"बिज़नेस",
    marketing       :"मार्केटिंग"
    
  }
  
  const english = {
    add_farmer      :"Add Farmer",
    order_history   :"Order History",
    business        :"Business",
    marketing       :"SMS Marketing"
  }
  
  export default (language) => language === "HI" ? hindi : english;