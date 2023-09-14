import { IconType } from "react-icons";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbPlayerPlayFilled } from "react-icons/tb";


const categoryColor = {
    "general": "#FFB100",
    "academics": "#FFB100",
    "admissions": "#FFB100",
    "careers": "#FFB100",
    "college life": "#FFB100",
    "competitions": "#FFB100",
    "events": "#FFB100",
    "fests": "#FFB100",
    "placements": "#FFB100",
    "projects": "#FFB100",
    "scholarships": "#FFB100",
    "sports": "#FFB100",
    "study Abroad": "#FFB100",
    "others": "#FFB100",
    "ask me anything": "#FFB100",
    "campus ambassador": "#FFB100",
    "campus news": "#FFB100",
    "campus radio": "#FFB100",
    "campus stories": "#FFB100",
    "campus videos": "#FFB100",
    "college reviews": "#FFB100",
    "confessions": "#FFB100",
    "freshers": "#FFB100",
    "freshers guide": "#FFB100",
    "freshers stories": "#FFB100",
    "freshers videos": "#FFB100",
    "hostels": "#FFB100",
    "intern diaries": "#FFB100",
    "internships": "#ff006e",
    "jee": "#FFB100",
    "entertainment": "#ffc300",
    "technology": "#FFB100",
};

const categoryIcon = {
    "entertainment": TbPlayerPlayFilled,
    "internships": RiSuitcaseLine,
} as Record<string, IconType>;


export { categoryColor, categoryIcon };