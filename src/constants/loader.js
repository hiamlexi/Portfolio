import { logos, sharedAssets } from './publicData.js';

const BUCKET_URL = import.meta.env.VITE_API_BUCKET_URL;

export const loadExperienceAndProjects = async () => {
  try {
  const res = await fetch(BUCKET_URL);
    if (!res.ok) throw new Error('Bucket fetch failed');
        const privateData = await res.json();
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
    console.error(e)
  }

  // fallback to dummy file
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
