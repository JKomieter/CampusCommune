import { IconType } from "react-icons";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbPlayerPlayFilled } from "react-icons/tb";


const categoryColor = {
    "general": "#FFB100",
    "academics": "#FFB100",
    "admissions": "#FFB100",
    "careers": "#FFB100",
    "college life": "#FFB100",
    "Competitions": "#FFB100",
    "Events": "#FFB100",
    "Fests": "#FFB100",
    "Placements": "#FFB100",
    "Projects": "#FFB100",
    "Scholarships": "#FFB100",
    "Sports": "#FFB100",
    "Study Abroad": "#FFB100",
    "Others": "#FFB100",
    "Ask Me Anything": "#FFB100",
    "Campus Ambassador": "#FFB100",
    "Campus News": "#FFB100",
    "Campus Radio": "#FFB100",
    "Campus Stories": "#FFB100",
    "Campus Videos": "#FFB100",
    "College Reviews": "#FFB100",
    "Confessions": "#FFB100",
    "Freshers": "#FFB100",
    "Freshers Guide": "#FFB100",
    "Freshers Stories": "#FFB100",
    "Freshers Videos": "#FFB100",
    "Hostels": "#FFB100",
    "Intern Diaries": "#FFB100",
    "internships": "#ff006e",
    "JEE": "#FFB100",
    "entertainment": "#ffc300",
    "Technology": "#FFB100",
};

const categoryIcon = {
    "entertainment": TbPlayerPlayFilled,
    "internships": RiSuitcaseLine,
} as Record<string, IconType>;


export { categoryColor, categoryIcon };