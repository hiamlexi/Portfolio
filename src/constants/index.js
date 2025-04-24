import { skills, socialLinks, logos, sharedAssets } from "./publicData";

let experiences = [];
let projects = [];

try {
  const privateData = await import("./data.js");

  experiences = privateData.experiences.map(exp => ({
    ...exp,
    icon: logos.icons[exp.iconKey],
  }));

  projects = privateData.projects.map(p => ({
    ...p,
    iconUrl: sharedAssets.icons[p.iconUrl],
  }));
} catch (e) {
  console.warn("Private data not found. Falling back to dummy data.");
  const dummyData = await import("./dummyData.js");

  experiences = dummyData.experiences.map(exp => ({
    ...exp,
    icon: logos.icons[exp.iconKey],
  }));

  projects = dummyData.projects.map(p => ({
    ...p,
    iconUrl: sharedAssets.icons[p.iconKey],
  }));
}

export { skills, experiences, projects, socialLinks };
