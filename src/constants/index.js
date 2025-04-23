import { skills, socialLinks, logos, sharedAssets } from "./publicData";

let experiences = [];
let projects = [];

try {
  const privateData = await import("./data.js");

  experiences = privateData.experiences.map(exp => ({
    ...exp,
    icon: logos.icons[exp.iconKey]
  }));

  projects = privateData.projects.map(p => ({
    ...p,
    iconUrl: sharedAssets.icons[p.iconUrl], 
  }));

} catch (e) {
  console.warn("Experiences and projects are hidden.");
}

export { skills, experiences, projects, socialLinks };
