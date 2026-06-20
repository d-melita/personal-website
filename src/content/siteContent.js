export const brandName = "Diogo Melita";

export const shortDescription = "SWE @ freiheit.com // Lisbon, PT";

export const aboutSummary =
  "Building large-scale software systems that solve real problems. I care about reliability, clarity, and shipping software that survives contact with production. I'm especially interested in the point where blockchain and AI stop being buzzwords and start improving how systems behave.";

export const terminalTaglines = [
  "compiling personality...",
  "0 bugs found (trust me)",
  "sudo make me a website",
  "git commit -m 'looks good to me'",
  "rm -rf doubts/",
  "while(alive) { code(); }",
  "// TODO: add more jokes",
];

export const quickLinks = [
  {
    label: "GitHub",
    shortLabel: "GH",
    href: "https://github.com/d-melita",
    external: true,
  },
  {
    label: "LinkedIn",
    shortLabel: "IN",
    href: "https://www.linkedin.com/in/diogo-melita/",
    external: true,
  },
  {
    label: "CV",
    shortLabel: "CV",
    href: "https://cv.melita.pt",
    external: true,
  },
];

export const contactLinks = [
  {
    title: "GitHub",
    description: "Code, experiments, and repositories.",
    href: "https://github.com/d-melita",
    icon: "/assets/github.svg",
  },
  {
    title: "LinkedIn",
    description: "Professional profile and updates.",
    href: "https://www.linkedin.com/in/diogo-melita/",
    icon: "/assets/linkedin.svg",
  },
  {
    title: "Email",
    description: "Direct contact for collaborations or questions.",
    href: "mailto:diogo@melita.pt",
    icon: "/assets/icon.svg",
    external: false,
  },
];

export const projects = [
  {
    title: "Sui Groups",
    description:
      "A Web3 application that was 5th place at the BSA - EPFL | Stablecoins & Payments Hackathon. Written in Move, SUI's Rust-based programming language. It presents an MVP for a community based Social Media, where users can send messages, create groups, and interact with each other in a decentralized way.",
    tags: ["Move", "TypeScript/React", "Sui Blockchain"],
    github: "https://github.com/d-melita/sui-hackathon",
    status: "latest // deployed",
  },
  {
    title: "Bonsai",
    description:
      "Bonsai is an error and intrusion recovery system for Ethereum-based token exchanges, built for my Master's thesis and published in a peer-reviewed paper. It introduces BON, an ERC-20 token pegged 1:1 to ETH, that lets users reverse fraudulent or mistaken transfers through decentralized arbitration — without breaking blockchain's core guarantees of immutability and non-repudiation.",
    tags: ["Solidity", "React", "EVM"],
    github: "https://github.com/d-melita/bonsai",
    status: "v0.x // stable",
    paper: "https://ieeexplore.ieee.org/document/11261562",
  },
];

export const footerTaglines = [
  "shipped without mass casualties",
  "built with mass amounts of caffeine",
  "no mass assignments were harmed",
  "works on my machine™",
  "pushed to main on a friday",
  "0 incidents since last deploy",
];
