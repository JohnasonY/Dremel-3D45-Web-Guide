import { Download, ExternalLink, Film, Layers3, RotateCcw } from "lucide-react";
import levelingVideo from "../../assets/videos/Leveling.m4v?url";
import prepBuildVideo from "../../assets/videos/Prep&Build.m4v?url";
import filamentCheckImage from "../assets/filament-check.png";

export const guideSteps = [
  {
    number: 1,
    Icon: RotateCcw,
    title: "Change Filament",
    label: "Optional",
    description:
      "Use the filament change walkthrough if you need to swap material before printing.",
    link: {
      href: "https://www.youtube.com/watch?v=4EDTA8yB0dg&t=7s",
      text: "Video: 3D Printer Filament Change on the Dremel DigiLab 3D45",
      Icon: ExternalLink,
    },
    tip: "You should see the filament go through the hole of the printhead as shown below when you skip it.",
    image: {
      src: filamentCheckImage,
      alt: "Filament visible through the printhead hole",
    },
  },
  {
    number: 2,
    Icon: Film,
    title: "Leveling",
    description: (
      <>
        Click <strong>LEVEL</strong> on the printer screen.
      </>
    ),
    video: {
      label: "Leveling video",
      src: levelingVideo,
      source: {
        href: "https://www.youtube.com/watch?v=VGBSVOaFj5Y",
        text: "Source: Dremel Digilab 3D45 3D Printer: Getting Started",
      },
    },
  },
  {
    number: 3,
    Icon: Layers3,
    title: "3D File Preparation & Build",
    description:
      "Install the Dremel DigiLab 3D Slicer software before preparing your model. The purpose of this step is to slice your model and convert your model file into 3D45 ready-to-print file such as .gcode, .g3drem or .g ",
    link: {
      href: "https://3pitech.com/pages/desktop-slicer-software",
      text: "Download Dremel DigiLab 3D Slicer",
      Icon: Download,
    },
    video: {
      label: "3D file preparation video",
      src: prepBuildVideo,
      source: {
        href: "https://www.youtube.com/watch?v=VGBSVOaFj5Y",
        text: "Source: Dremel Digilab 3D45 3D Printer: Getting Started",
      },
    },
  },
];
