export const patient = {
  first_name: "Eunji",
  last_name: "Lee",
  date_of_birth: "1992-08-20",
  gender: "F",
  occupation: "Consultant",
  nhi_number: "NHIUAU2990",
  clinical_need: "High",
  tags: ["Medication change", "Medical certificate"],
  preferred_language: "Korean",
  ended_at: "Submitted today at 8:15 AM",
  translated_from: "Korean",
  chief_complaint:
    "Patient’s migraine began 2 weeks ago, worsening over the duration. Consistent pain with intermittent sharpness. Exacerbates with stress. No nausea or vomiting. Currently takes panadol.",
  ice: {
    idea: "I think I'm tired from work and stressed at home, giving me a migraine",
    concern: "I'm worried about potential heart problems",
    expectation: "I want reassurance and a medical certificate to take time off of work",
  },
  presenting_symptoms: [
    {
      label: "Chest pain",
      type: "Physical acute",
      is_red_flag: true,
      details: [
        { term: "Severity", detail: "6/10" },
        {
          term: "Onset",
          detail: "Uncertain",
          subDetail:
            "Experienced for more than a few months, uncertain for how long.",
        },
        { term: "Character", detail: "Stinging pain" },
        { term: "Related Symptoms", detail: "0 Indicated" },
        { term: "Current Management", detail: "No steps taken" },
      ],
      notes:
        "Severity: 6/10\nOnset: Uncertain\nExperienced for more than a few months, uncertain for how long.\nCharacter: Stinging pain\nRelated Symptoms: 0 Indicated\nCurrent Management: No steps taken",
    },
    {
      label: "Migraine",
      type: "Physical acute",
      details: [
        { term: "Site", detail: "Head" },
        { term: "Progression", detail: "Consistent" },
        { term: "Interval", detail: "Daily" },
        { term: "Expectation", detail: "Wants medicine change" },
        { term: "Lifestyle", detail: "Sedentary" },
        { term: "Family history", detail: "Mother has Migraine" },
      ],
      notes: "No details available.",
    },
  ],
  consult_length: "13:12",
};
