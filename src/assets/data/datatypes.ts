export interface Degree {
    "Entity" : string | null;
    "City"  : string | null;
    "State" : string | null;
    "Title" : string | null;
    "Month" : string | null;
    "Year" : string | null;
    "Subtext" : string | null;
    "LogoPath" : string | null;
}

export interface TlEntry {
    "Entity" : string | null;
    "City"  : string | null;
    "State" : string | null;
    "Title" : string | null;
    "StartMonth" : string | null;
    "StartYear" : string | null;
    "EndMonth" : string | null;
    "EndYear" : string | null;
    "Subtext" : string | null;
    "LogoPath" : string | null;
    "Description" : string | null;
}

export interface TechSkills {
    "Name": string | null;
    "Class": string | null;
    "Domain": string | null;
    "LogoPath": string | null;
}
export interface OtherSkills {
    "Name": string | null;
    "OtherSkills" : string[];
}

/* "../../../../assets */
export interface Project {
    "Name": string;
    "Description" : string;
    "Overview": string;
    "Contributions": string[] | null;
    "VisualPath": string | null;
    "Tools": string[];
    "ToolsVisualPath": string[];
    "OtherTools": string[];
}