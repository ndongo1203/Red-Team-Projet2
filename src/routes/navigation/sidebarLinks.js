import { AiOutlineMessage, AiOutlineRadiusSetting, AiTwotoneEdit } from "react-icons/ai";
import { ACCEUIL_PATH, CLENDAR_PATH, GETTINGSARTED_PATH, MAP_PATH, MESSAGES_PATH, PAGEEXAMPLE_PATH, PLUGINS_PATH, PRODUCTS_PATH, SETTINGS_PATH, TABLE_PATH, TRANSACTION_PATH } from "./navigationPaths";
import { HiAcademicCap } from "react-icons/hi";
import { FaCalendar, FaCompressAlt, FaMap, FaPage4, FaPlug, FaReact, FaTable, FaTransgenderAlt } from "react-icons/fa";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
    { path: ACCEUIL_PATH, icon: FaReact, label: "Volt React" },
    { path: PRODUCTS_PATH, icon: HiAcademicCap, label: "Overview" },
    { path: MESSAGES_PATH, icon: AiOutlineMessage, label: "Messages" },
    { path: TRANSACTION_PATH, icon: FaTransgenderAlt, label: "Transactions" },
    { path: SETTINGS_PATH, icon: AiOutlineRadiusSetting, label: "Setting" },
    { path: CLENDAR_PATH, icon: FaCalendar, label: "Clendar" },
    { path: MAP_PATH, icon: FaMap, label: "Map" },
    { path: TABLE_PATH, icon: FaTable, label: "Tables" },
    { path: PAGEEXAMPLE_PATH, icon: FaPage4, label: "Page Examples" },
    { path: GETTINGSARTED_PATH, icon: AiTwotoneEdit, label: "Getting Started" },
    { path: GETTINGSARTED_PATH, icon: FaCompressAlt, label: "Components" },
    { path: PLUGINS_PATH, icon: FaPlug, label: "Plugins" },
]
