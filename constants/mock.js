import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import images from "./images";
import { COLORS } from "./theme";

dayjs.extend(advancedFormat);

const TODAY = dayjs();
const TOMORROW = dayjs().add(1, "day");

const randomAvatar = (type = "m", min = 1, max = 25) => {
  const randomInt = Math.floor(Math.random() * (max - min)) + min;
  return `https://faces.design/faces/${type}/${type}${randomInt}.png`;
};

export const ACTIVITIES = [
  {
    id: 1,
    type: "upload",
    user: { name: "Marriet Miles" },
    content: "uploaded a new file",
    file: { name: "Analytics_report", type: "excel" },
    timestamp: dayjs()
  },
  {
    id: 2,
    type: "comment",
    user: { name: "Gunther Ackner" },
    content: "invited you to a new channel",
    channel: {
      name: "# Analytics",
      users: [
        "https://faces.design/faces/w/w1.png",
        "https://faces.design/faces/m/m1.png",
        "https://faces.design/faces/w/w2.png",
        "https://faces.design/faces/m/m2.png",
        "https://faces.design/faces/m/m3.png",
        "https://faces.design/faces/w/w8.png",
        "https://faces.design/faces/m/m8.png",
        "https://faces.design/faces/w/w9.png",
        "https://faces.design/faces/m/m9.png"
      ]
    },
    timestamp: dayjs().subtract(10, "minute")
  },
  {
    id: 3,
    type: "traffic",
    user: { name: "Billy Green" },
    content: "moved a task to review",
    timestamp: dayjs().subtract(20, "minute")
  },
  {
    id: 4,
    type: "traffic",
    user: { name: "Billy Green" },
    content: "moved a task to pending",
    timestamp: dayjs().subtract(21, "minute")
  },
  {
    id: 5,
    type: "comment",
    user: { name: "Margie Jutten" },
    content: "invited you to a new channel",
    channel: {
      name: "# Accounting",
      users: [
        "https://faces.design/faces/w/w1.png",
        "https://faces.design/faces/m/m1.png",
        "https://faces.design/faces/w/w2.png",
        "https://faces.design/faces/m/m2.png",
        "https://faces.design/faces/m/m3.png",
        "https://faces.design/faces/w/w8.png",
        "https://faces.design/faces/m/m8.png"
      ]
    },
    timestamp: dayjs().subtract(50, "minute")
  }
];

export const NOTIFICATIONS = [
  {
    id: 1,
    user: {
      avatar: "https://faces.design/faces/m/m1.png",
      name: "Gunther Ackner"
    },
    time: dayjs().subtract(4, "minute"),
    action: "replied to your comment on",
    type: "file"
  },
  {
    id: 2,
    user: {
      avatar: "https://faces.design/faces/w/w1.png",
      name: "Marriet Miles"
    },
    time: dayjs().subtract(5, "minute"),
    action: "invited you to a new channel named Analytics",
    type: "comment"
  },
  {
    id: 3,
    user: {
      avatar: "https://faces.design/faces/w/w2.png",
      name: "Meysam Nassour"
    },
    time: dayjs().subtract(10, "minute"),
    action: "assigned to you a new task",
    type: "task"
  },
  {
    id: 4,
    user: {
      avatar: "https://faces.design/faces/m/m2.png",
      name: "Ralph Guerrero"
    },
    time: dayjs().subtract(15, "minute"),
    action: "deleted 20 files from Reports folder",
    type: "bin"
  },
  {
    id: 5,
    user: {
      avatar: "https://faces.design/faces/w/w3.png",
      name: "Margie Jutten"
    },
    time: dayjs().subtract(20, "minute"),
    action: "invited you to a new channel named Reports",
    type: "comment"
  },
  {
    id: 6,
    user: {
      avatar: "https://faces.design/faces/m/m3.png",
      name: "Billy Green"
    },
    time: dayjs().subtract(22, "minute"),
    action: "moved a task to pending",
    type: "traffic"
  },
  {
    id: 7,
    user: {
      avatar: "https://faces.design/faces/w/w5.png",
      name: "Mina Fleming"
    },
    time: dayjs().subtract(23, "minute"),
    action: "shared a folder with you",
    type: "sharedFolder"
  },
  {
    id: 8,
    user: {
      avatar: "https://faces.design/faces/m/m6.png",
      name: "Tommy Dawson"
    },
    time: dayjs().subtract(30, "minute"),
    action: "uploaded a new file to Reports folder",
    type: "upload"
  }
];

export const BOARDS_ITEMS = [
  {
    id: 1,
    name: "TO DO",
    color: COLORS.error,
    cards: [
      {
        title: "Team Meeting",
        startAt: TOMORROW,
        endsAt: TOMORROW.add(30, "m"),
        files: 3,
        priority: "low",
        users: [randomAvatar(), randomAvatar("w"), randomAvatar()]
      },
      {
        title: "Weekly Report",
        startAt: TODAY.add(60, "m"),
        endsAt: TODAY.add(90, "m"),
        files: 3,
        priority: "low",
        users: [
          randomAvatar("w"),
          randomAvatar(),
          randomAvatar(),
          randomAvatar("w")
        ]
      },
      {
        title: "Client Meeting",
        startAt: TOMORROW.add(100, "m"),
        endsAt: TOMORROW.add(160, "m"),
        files: 3,
        priority: "low",
        users: [randomAvatar("w"), randomAvatar("w"), randomAvatar()]
      }
    ]
  },
  {
    id: 2,
    name: "IN PROGRESS",
    color: COLORS.secondary,
    cards: [
      {
        title: "Send Invoice",
        startAt: TODAY,
        endsAt: TODAY.add(30, "m"),
        files: 3,
        priority: "low",
        users: [randomAvatar(), randomAvatar("w"), randomAvatar()]
      },
      {
        title: "Client Meeting",
        startAt: TODAY.add(100, "m"),
        endsAt: TODAY.add(160, "m"),
        files: 3,
        priority: "low",
        users: [randomAvatar("w"), randomAvatar("w"), randomAvatar()]
      }
    ]
  }
];

export const APPOINTMENTS = [
  {
    title: "Team Meeting",
    startAt: TOMORROW,
    endsAt: TOMORROW.add(30, "m"),
    files: 3,
    priority: "medium",
    users: [randomAvatar(), randomAvatar("w"), randomAvatar()]
  },
  {
    title: "Weekly Report",
    startAt: TODAY.add(60, "m"),
    endsAt: TODAY.add(90, "m"),
    files: 3,
    priority: "low",
    users: [
      randomAvatar("w"),
      randomAvatar(),
      randomAvatar(),
      randomAvatar("w")
    ]
  },
  {
    title: "Client Meeting",
    startAt: TOMORROW.add(100, "m"),
    endsAt: TOMORROW.add(160, "m"),
    priority: "high",
    users: [randomAvatar("w"), randomAvatar("w"), randomAvatar()]
  }
];

export const TASK = {
  title: "Analytics Meeting",
  timestamp: dayjs(),
  duration: 30,
  priority: "Low",
  description:
    "We need to reflect on what happened in the latest report and identify actions for improvement going forward.",
  attachments: ["Analytics_report.xls", "Project_Overview.ppt"]
};

export const MESSAGES = [
  {
    id: 1,
    user: {
      name: "Leticia Saavedra",
      avatar: "https://faces.design/faces/w/w1.png"
    },
    timestamp: dayjs().subtract(4, "m"),
    type: "text",
    message:
      "Happy Friday Team! Remember to share your reports to review before the end of the weekend and feel free to share your thoughts about it"
  },

  {
    id: 2,
    user: {
      name: "Edward Ford",
      avatar: "https://faces.design/faces/m/m1.png"
    },
    timestamp: dayjs().subtract(10, "m"),
    type: "file",
    message: {
      file: "Analytics_report",
      type: "excel"
    }
  },
  {
    id: 3,
    user: { name: "Anne Carry", avatar: "https://faces.design/faces/w/w2.png" },
    timestamp: dayjs().subtract(24, "m"),
    type: "text",
    message: "I'll send you mine shortly, still working on it!"
  },
  {
    id: 4,
    user: {
      name: "Gunther Ackner",
      avatar: "https://faces.design/faces/m/m2.png"
    },
    timestamp: dayjs().subtract(35, "m"),
    type: "image",
    message: [
      "https://source.unsplash.com/68x68/?train",
      "https://source.unsplash.com/68x68/?building",
      "https://source.unsplash.com/68x68/?bridge"
    ]
  },
  {
    id: 5,
    user: { name: "Devin Wong", avatar: "https://faces.design/faces/m/m3.png" },
    timestamp: dayjs().subtract(50, "m"),
    type: "text",
    message: "I'm uploading mine! Tks"
  }
];

export const HIGHLIGHTS = [
  {
    icon: "traffic",
    iconColor: COLORS.success,
    title: "Total Sessions",
    count: "36.1K"
  },
  {
    icon: "user",
    iconColor: COLORS.primary,
    title: "Total Visitors",
    count: "2,642",
    progress: true, // increase or decrease
    percentage: 10
  },
  {
    icon: "clock",
    iconColor: COLORS.error,
    title: "Avg Time Spend",
    count: "3.21",
    progress: false, // increase or decrease
    percentage: 3
  }
];

export const AUDIENCE = [
  {
    color: COLORS.secondary,
    label: "Returning Customers",
    value: 51
  },
  {
    color: COLORS.primary,
    label: "New Customers",
    value: 49
  },
  {
    color: COLORS.success,
    label: "Bounce rate",
    value: 53
  }
];

export const CONTACT_ACTIVITIES = [
  {
    id: 1,
    type: "upload",
    content: "uploaded a new file",
    file: { name: "Analytics_report", type: "excel" },
    timestamp: dayjs()
  },
  {
    id: 2,
    type: "comment",
    content: "invited you to a new channel",
    channel: {
      name: "# Analytics",
      users: [
        "https://faces.design/faces/w/w1.png",
        "https://faces.design/faces/m/m1.png",
        "https://faces.design/faces/w/w2.png",
        "https://faces.design/faces/m/m2.png",
        "https://faces.design/faces/m/m3.png",
        "https://faces.design/faces/w/w8.png",
        "https://faces.design/faces/m/m8.png",
        "https://faces.design/faces/w/w9.png",
        "https://faces.design/faces/m/m9.png"
      ]
    },
    timestamp: dayjs().subtract(10, "minute")
  }
];

export const CONTACTS = [
  {
    id: 1,
    name: "Cammy Hedling",
    email: "cammy.hedling@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "Data Engineer",
    online: true,
    avatar: "https://faces.design/faces/w/w1.png",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 2,
    name: "Gunther Ackner",
    email: "gunther.ackner@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "Data Engineer",
    online: true,
    avatar: "https://faces.design/faces/m/m1.png",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 3,
    name: "Margie Jutten",
    email: "margie.jutten@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "UI Designer",
    online: true,
    avatar: "https://faces.design/faces/w/w2.png",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 4,
    name: "Hubert Franck",
    email: "hubert.franck@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "UX Designer",
    online: false,
    avatar: "https://faces.design/faces/m/m2.png",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 5,
    name: "Meysam Nassour",
    email: "meysam.nassour@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "UI Developer",
    online: false,
    avatar: "https://faces.design/faces/m/m3.png",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 6,
    name: "Tommy Dawson",
    email: "tommy.dawson@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "UI Developer",
    online: false,
    avatar: "https://faces.design/faces/m/m4.png",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 7,
    name: "Isabelle Luna",
    email: "isabelle.luna@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "Maketing Analyst",
    online: false,
    avatar: "https://faces.design/faces/w/w3.png",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 8,
    name: "Ralph Guerrero",
    email: "ralph.guerrero@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "SEO Analyst",
    online: true,
    avatar: "https://faces.design/faces/m/m15",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 9,
    name: "Mina Fleming",
    email: "mina.fleming@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "Data Engineer",
    online: false,
    avatar: "https://faces.design/faces/w/w4.png",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 10,
    name: "Sara Scholz",
    email: "sara.scholz@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "QA Engineer",
    online: false,
    avatar: "https://faces.design/faces/w/w5.png",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 11,
    name: "Gary Higgins",
    email: "gary.higgins@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "Team Lead",
    online: true,
    avatar: "https://faces.design/faces/m/m6.png",
    activities: CONTACT_ACTIVITIES
  },
  {
    id: 12,
    name: "Louisa Ingram",
    email: "louisa.ingram@mail.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    position: "Data Engineer",
    online: true,
    avatar: "https://faces.design/faces/w/w6.png",
    activities: CONTACT_ACTIVITIES
  }
];

export const USER = {
  avatar: images.avatar,
  online: true,
  name: "David Wong",
  first_name: "Davin",
  last_name: "Wong",
  email: "david.wong@mail.com",
  phone: "+1234567890",
  position: "Head of Marketing",
  location: "San Francisco, CA",
  time: dayjs(),
  activities: [
    {
      id: 1,
      type: "upload",
      content: "uploaded a new file",
      file: { name: "Analytics_report", type: "excel" },
      timestamp: dayjs()
    },
    {
      id: 2,
      type: "comment",
      content: "invited you to a new channel",
      channel: {
        name: "# Analytics",
        users: [
          "https://faces.design/faces/w/w1.png",
          "https://faces.design/faces/m/m1.png",
          "https://faces.design/faces/w/w2.png",
          "https://faces.design/faces/m/m2.png",
          "https://faces.design/faces/m/m3.png",
          "https://faces.design/faces/w/w8.png",
          "https://faces.design/faces/m/m8.png",
          "https://faces.design/faces/w/w9.png",
          "https://faces.design/faces/m/m9.png"
        ]
      },
      timestamp: dayjs().subtract(10, "minute")
    }
  ]
};

export const LIBRARY = [
  {
    id: 1,
    shared: false,
    name: "Weekly Reports",
    files: [
      { id: 2, name: "Analytics_report", size: 12, type: "excel" },
      { id: 4, name: "Weekly_Data", size: 12, type: "excel" }
    ]
  },
  {
    id: 2,
    shared: true,
    name: "Resources",
    files: [
      { id: 3, name: "Landing_Page_Final", size: 386, type: "sketch" },
      { id: 5, name: "App_Screens", size: 245, type: "sketch" },
      { id: 6, name: "Customer_Presentation", size: 12, type: "powerpoint" }
    ]
  },
  {
    id: 3,
    shared: true,
    name: "Client Assets",
    files: [
      { id: 2, name: "Analytics_report", size: 12, type: "excel" },
      { id: 3, name: "Landing_Page_Final", size: 386, type: "sketch" },
      { id: 5, name: "App_Screens", size: 245, type: "sketch" },
      { id: 6, name: "Customer_Presentation", size: 12, type: "powerpoint" }
    ]
  },
  {
    id: 4,
    shared: false,
    name: "Project Overview",
    files: [
      { id: 1, name: "Feedback_03", size: 6, type: "word" },
      { id: 2, name: "Analytics_report", size: 12, type: "excel" },
      { id: 3, name: "Landing_Page_Final", size: 386, type: "sketch" },
      { id: 4, name: "Weekly_Data", size: 12, type: "excel" },
      { id: 5, name: "App_Screens", size: 245, type: "sketch" },
      { id: 6, name: "Customer_Presentation", size: 12, type: "powerpoint" }
    ]
  },
  {
    id: 5,
    shared: true,
    name: "Contracts",
    files: [
      { id: 1, name: "Feedback_03", size: 6, type: "word" },
      { id: 6, name: "Customer_Presentation", size: 12, type: "powerpoint" }
    ]
  }
];

export const FILES = [
  { id: 1, name: "Feedback_03", size: 6, type: "word" },
  { id: 2, name: "Analytics_report", size: 12, type: "excel" },
  { id: 3, name: "Landing_Page_Final", size: 386, type: "sketch" },
  { id: 4, name: "Weekly_Data", size: 12, type: "excel" },
  { id: 5, name: "App_Screens", size: 245, type: "sketch" },
  { id: 6, name: "Customer_Presentation", size: 12, type: "powerpoint" }
];

const SEARCH = {
  files: FILES,
  projects: BOARDS_ITEMS,
  tasks: APPOINTMENTS
};

export default {
  ACTIVITIES,
  NOTIFICATIONS,
  BOARDS_ITEMS,
  APPOINTMENTS,
  TASK,
  MESSAGES,
  HIGHLIGHTS,
  AUDIENCE,
  CONTACT_ACTIVITIES,
  CONTACTS,
  USER,
  SEARCH
};
