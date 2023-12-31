import { IconType } from "react-icons";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbPlayerPlayFilled } from "react-icons/tb";


const categoryColor = {
    "general": "#FFB100",
    "academics": "#FFD700",
    "admissions": "#FF5733",
    "careers": "#C70039",
    "college life": "#900C3F",
    "competitions": "#581845",
    "events": "#900C3F",
    "fests": "#C70039",
    "placements": "#FF5733",
    "projects": "#FFD700",
    "scholarships": "#FFB100",
    "sports": "#FFD700",
    "study Abroad": "#FF5733",
    "others": "#C70039",
    "ask me anything": "#900C3F",
    "campus ambassador": "#581845",
    "campus news": "#900C3F",
    "campus radio": "#C70039",
    "campus stories": "#FF5733",
    "campus videos": "#FFD700",
    "college reviews": "#FFB100",
    "confessions": "#FFD700",
    "freshers": "#FF5733",
    "freshers guide": "#C70039",
    "freshers stories": "#900C3F",
    "freshers videos": "#581845",
    "hostels": "#FFD700",
    "intern diaries": "#FFB100",
    "internships": "#FF5733",
    "jee": "#900C3F",
    "entertainment": "#581845",
    "technology": "#C70039",
    "campus gossip": "#FF5733",
    "programming": "#FFD700",
    "music": "#900C3F",
    "food": "#581845",
    "health": "#C70039",
    "books": "#FF5733",
    "travel": "#FFD700",
    "art": "#FFB100",
    "science": "#FF5733",
    "history": "#FFD700",
    "mathematics": "#900C3F",
    "business": "#C70039",
    "finance": "#581845",
    "language": "#FFB100",
    "culture": "#FF5733",
    "politics": "#900C3F",
    "environment": "#581845",
    "gaming": "#C70039",
    "movies": "#FF5733",
    "TV shows": "#FFB100",
    "celebrities": "#581845",
    "fitness": "#C70039",
    "cooking": "#900C3F",
    "DIY": "#FF5733",
    "gardening": "#FFB100",
};

// You can continue adding more categories and colors as needed



const categoryIcon = {
    "entertainment": TbPlayerPlayFilled,
    "internships": RiSuitcaseLine,
} as Record<string, IconType>;


export { categoryColor, categoryIcon };