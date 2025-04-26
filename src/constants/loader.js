import { logos, sharedAssets } from './publicData.js';

export const loadExperienceAndProjects = async () => {
  const modules = import.meta.glob('./*.js');

  try {
    const privateData = modules['./data.js']
      ? await modules['./data.js']()
      : null;

    if (privateData) {
      return {
        experiences: privateData.experiences.map((exp) => ({
          ...exp,
          icon: logos.icons[exp.iconKey],
        })),
        projects: privateData.projects.map((p) => ({
          ...p,
          iconUrl: sharedAssets.icons[p.iconUrl],
        })),
      };
    }
  } catch (e) {
    console.warn('Private data load failed. Falling back to dummy.');
  }

  // fallback
  const dummyData = await import('./dummyData.js');
  return {
    experiences: dummyData.experiences.map((exp) => ({
      ...exp,
      icon: logos.icons[exp.iconKey],
    })),
    projects: dummyData.projects.map((p) => ({
      ...p,
      iconUrl: sharedAssets.icons[p.iconUrl],
    })),
  };
};
