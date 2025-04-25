
import { skills, socialLinks, logos, sharedAssets } from "./publicData";

export const loadExperienceAndProjects = async (logos, sharedAssets) => {
  const modules = import.meta.glob('./*.js');

  if (modules['./data.js']) {
    const privateData = await modules['./data.js']();

    return {
      experiences: privateData.experiences.map(exp => ({
        ...exp,
        icon: logos.icons[exp.iconKey],
      })),
      projects: privateData.projects.map(p => ({
        ...p,
        iconUrl: sharedAssets.icons[p.iconKey],
      })),
    };
  } else {
    const dummyData = await modules['./dummyData.js']();

    return {
      experiences: dummyData.experiences.map(exp => ({
        ...exp,
        icon: logos.icons[exp.iconKey],
      })),
      projects: dummyData.projects.map(p => ({
        ...p,
        iconUrl: sharedAssets.icons[p.iconKey],
      })),
    };
  }
}; 
