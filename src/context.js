import React, {useEffect,useState } from "react"
import items from "./data";

export const CoursesContext = React.createContext();

export const CoursesContextProvider = ({ children }) => {
  const [sortedCourses, setSortedCourses] = useState("");
  const [search, setSearch] = useState("");
  const [uIUXDesignCount, setUIUXDesignCount] = useState("");
  const [creativeWritingCount, setCreativeWritingCount] = useState("");
  const [graphicDesignCount, setGraphicDesignCount] = useState("");
  const [fineArtsCount, setFineArtsCount] = useState("");
  const [businessAnalyticsount, setBusinessAnalyticsount] = useState("");
  const [marketingCount, setMarketingCount] = useState("");
  const [scienceCount, setScienceCount] = useState("");
  const [recentPosts, setRecentPosts] = useState("");


 const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value) 
  }

  useEffect(async () => {
    setSortedCourses(items)
    setUIUXDesignCount(items.filter((obj) => obj.category === "UI/UX Design").length)
    setCreativeWritingCount(items.filter((obj) => obj.category === "Creative Writing").length)
    setGraphicDesignCount(items.filter((obj) => obj.category === "Graphic Design").length)
    setFineArtsCount(items.filter((obj) => obj.category === "Fine Arts").length)
    setBusinessAnalyticsount(items.filter((obj) => obj.category === "Business Analytics").length)
    setMarketingCount(items.filter((obj) => obj.category === "Marketing").length)
    setScienceCount(items.filter((obj) => obj.category === "Science").length)
    setRecentPosts(items.filter((obj) => obj.date).slice(0,4))
  },[]);

   useEffect(() => {
    let tempsortedCourses = [...items];
    tempsortedCourses = tempsortedCourses.filter(course => course.title.toLowerCase().includes(search.toLowerCase()));
    setSortedCourses(tempsortedCourses)
  },[search]);

  const filterCourses = (category) => {
      let tempsortedCourses = [...items];
      tempsortedCourses = tempsortedCourses.filter(course => course.category.toLowerCase() === category.toLowerCase());
      setSortedCourses(tempsortedCourses)
  }

  const filterCoursesByTags = (tags) => {
      let tempsortedCourses = [...items];
      tempsortedCourses = tempsortedCourses.filter(course => course.tags === tags);
      setSortedCourses(tempsortedCourses)
  }

  return (
    <CoursesContext.Provider value={{sortedCourses, filterCourses, search,recentPosts, filterCoursesByTags, handleSearch, uIUXDesignCount, scienceCount, creativeWritingCount, graphicDesignCount, fineArtsCount, businessAnalyticsount, marketingCount}}>
      {children}
    </CoursesContext.Provider>
  );
};