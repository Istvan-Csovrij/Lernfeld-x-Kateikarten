const kartenDaten = [
   {
    title: "CPS",
    textVertical: "CPS (Cyber-Physical Systems) connect physical processes with digital systems, e.g., through sensors, actuators, and software. They enable real-time control and require high security.",
    textHorizontal: "CPS: connection of real processes and digital systems, real-time control, security is important.",
    ptext: "Cyber-Physical Systems (CPS) integrate physical processes with digital components. They use sensors, actuators, and software to monitor and control systems in real time. Examples include autonomous vehicles, industrial automation, and smart grids. Security, reliability, and data protection are particularly important, as errors or cyberattacks can directly impact the real world."
},
{
    title: "CPPC",
    textVertical: "CPPC (Cyber-Physical Production Systems) are special CPS for manufacturing. They network machines, sensors, and software to flexibly and efficiently control production processes.",
    textHorizontal: "CPPC: connected production systems, flexible control, efficiency improvement.",
    ptext: "Cyber-Physical Production Systems (CPPC) are CPS specifically developed for production. They connect machines, sensors, and software to monitor and adjust production processes in real time. The goal is flexible, efficient, and secure manufacturing. Safety and reliability are crucial, as disruptions can directly affect production."
},
{
    title: "IoT",
    textVertical: "IoT (Internet of Things) connects devices via the Internet. Sensors collect data, devices communicate automatically, enabling intelligent applications.",
    textHorizontal: "IoT: connected devices, automatic data transfer, smart applications.",
    ptext: "The Internet of Things (IoT) describes the networking of physical devices via the Internet. Sensors collect data, which is sent over networks to other devices or cloud systems. This allows automated processes, e.g., in smart homes, wearables, logistics, or industrial facilities. IoT systems must be reliable, secure, and energy-efficient, as they often operate autonomously and handle large amounts of data."
},
{
    title: "IIoT",
    textVertical: "IIoT (Industrial Internet of Things) connects machines and systems in industry. It enables automation, data analysis, and efficient production processes.",
    textHorizontal: "IIoT: connected industrial systems, automation, data-based optimization.",
    ptext: "The Industrial Internet of Things (IIoT) refers to the application of IoT technologies in industrial environments. Sensors and machines continuously send data, which is used to monitor, control, and optimize production processes. This results in more efficient workflows, predictive maintenance, and higher product quality. Security and robust networks are particularly important, as these systems are often used in critical and complex production environments."
},
{
    title: "Smart Factory",
    textVertical: "Smart Factory uses connected systems, sensors, and AI to autonomously control and optimize production processes.",
    textHorizontal: "Smart Factory: intelligent, connected, self-optimizing production.",
    ptext: "A Smart Factory is a highly digitalized and networked factory where machines, equipment, and IT systems communicate. Sensors, data analysis, automation, and AI enable real-time monitoring, adjustment, and optimization of production processes. Smart Factories allow flexible manufacturing, lower downtime, and efficient resource use. They are a key component of Industry 4.0."
},
{
    title: "Smart Home",
    textVertical: "Smart Home connects household devices for automation, control, and optimization of comfort, energy, and security.",
    textHorizontal: "Smart Home: connected, automated home for comfort, energy efficiency, and security.",
    ptext: "A Smart Home includes connected devices and systems such as lighting, heating, security technology, and appliances, which can be automated or controlled via smartphone, voice assistant, and sensors. The goal is to increase comfort, save energy, and improve security. Intelligent routines allow, for example, automatic lighting, efficient heating control, or real-time home monitoring."
},
{
    title: "Predictive Maintenance",
    textVertical: "Predictive Maintenance uses sensor data and algorithms to predict machine conditions and prevent failures.",
    textHorizontal: "Predictive maintenance: anticipate when a machine needs servicing through data analysis.",
    ptext: "Predictive Maintenance refers to proactive maintenance of machines based on sensor data, analysis, and AI. Instead of fixed intervals, the system monitors conditions in real time and detects early signs of potential failures. This reduces unplanned downtime, lowers costs, and increases equipment lifespan. Typical data sources include vibrations, temperature, operating hours, or power consumption."
},
{
    title: "ERP",
    textVertical: "ERP systems link central business processes like purchasing, inventory, production, sales, and finance in a single software.",
    textHorizontal: "ERP: integrated business software that centrally manages and automates data and processes.",
    ptext: "An ERP system (Enterprise Resource Planning) is an integrated software solution connecting all key business areas. This automates processes, centralizes data, and improves decision-making. Typical modules include materials management, production, HR, accounting, and sales. ERP systems increase efficiency, transparency, and ensure smooth, seamless processes in companies."
},
{
    title: "Influence on CPS",
    textVertical: "Networking, data volume, sensors, and AI strongly influence CPS and enable more precise, connected real-time systems.",
    textHorizontal: "Influencing factors: digitalization, IoT, AI, automation – make CPS more efficient, faster, and smarter.",
    ptext: "Cyber-Physical Systems are strongly influenced by modern technologies such as IoT, artificial intelligence, cloud, big data, and high-speed networks. These improve real-time capabilities, data quality, and enable autonomous decision-making. At the same time, new challenges arise, such as cybersecurity, data protection, and increased system complexity."
},
{
    title: "MES",
    textVertical: "MES controls, monitors, and optimizes production processes in real time between ERP and the machine level.",
    textHorizontal: "MES: links ERP with production, provides real-time data, increases transparency and efficiency.",
    ptext: "A Manufacturing Execution System (MES) is software that monitors and controls production processes in real time. It forms the layer between ERP and machine control, collecting data from production, tracking orders, measuring quality, monitoring machine states, and optimizing workflows. The goal is transparent, efficient, and error-free production."
},
{
    title: "MES: Role in CPS context",
    textVertical: "MES acts as a link between enterprise planning (ERP) and physical production (CPS), integrating data flow and control vertically.",
    textHorizontal: "Core tasks: order management, quality data collection, process monitoring – MES orchestrates CPS collaboration.",
    ptext: "The MES serves as a central information hub for Cyber-Physical Systems. It translates abstract planning data into concrete work instructions for CPS and processes their feedback in real time. This enables dynamic production control, complete traceability, and prevents CPS from acting as isolated islands by integrating them into the overall process."
},
   {
    title: "CPS Pyramid: Influence on ERP",
    textVertical: "The CPS pyramid shows the connection between ERP, MES, and physical systems. ERP provides planning data, MES controls the CPS, and feedback is sent back.",
    textHorizontal: "CPS Pyramid: ERP → MES → CPS, vertical data flow, feedback for planning and control.",
    ptext: "The CPS pyramid describes the vertical integration of enterprise planning (ERP), production control (MES), and real production systems (CPS). ERP provides strategic planning data, MES translates it into concrete work orders, and CPS physically executes the actions. Feedback from CPS allows ERP to adjust planning dynamically, preventing isolated systems and ensuring efficient production."
},
{
    title: "ERP Level",
    textVertical: "The ERP level strategically controls orders, materials, and capacities, coordinating all business processes. It also provides guidance for production control.",
    textHorizontal: "ERP: planning, resource management, order control, provides directives to MES and ensures production continuity.",
    ptext: "ERP forms the top level of the CPS pyramid. It plans orders, controls materials and capacities, and provides directives to MES and CPS. Production results are fed back so planning and resources can be efficiently adjusted. ERP ensures stable, coordinated manufacturing and enables analysis of production metrics to support management decisions."
},
{
    title: "MES / SCADA Level",
    textVertical: "MES translates ERP planning into concrete production orders, SCADA monitors processes and ensures real-time transparency. This level is central for production control.",
    textHorizontal: "MES/SCADA: order execution, process control, quality monitoring.",
    ptext: "The MES/SCADA level connects strategic ERP planning with practical production implementation. MES distributes concrete work orders to machines and production lines, while SCADA monitors the state of equipment, documents processes, and collects quality data. This level provides real-time transparency and enables quick responses to disruptions, ensuring efficient and reliable production."
},
{
    title: "Control Level",
    textVertical: "Control systems directly translate MES orders into machine actions and monitor their correct execution. They form the interface between MES and the field level.",
    textHorizontal: "Control: PLCs, controllers, robots operate production and provide status.",
    ptext: "The control level converts MES orders into concrete machine commands. PLCs, industrial controllers, and robots directly control production equipment, monitor operating conditions, and report status information back. This ensures precise, safe, and efficient production and provides data to MES and ERP."
},
{
    title: "Field Level",
    textVertical: "Sensors and actuators measure and control physical production, sending real-time data upwards. They form the basis of all automation processes.",
    textHorizontal: "Field Level: sensors measure, actuators act, data flows upwards.",
    ptext: "The field level forms the physical foundation of the CPS pyramid. Sensors measure parameters such as temperature, pressure, position, or speed, while actuators perform mechanical or electrical actions. These elements are directly connected to the real world and continuously provide data to the control level and MES to dynamically control and optimize production processes."
},
{
    title: "Horizontal Integration",
    textVertical: "Connects machines and processes at the same production level, enabling smooth data exchange and coordinated workflows.",
    textHorizontal: "Horizontal: data exchange and synchronization between equipment.",
    ptext: "Horizontal integration ensures that machines, equipment, and processes at the same production level are interconnected. Data is exchanged in real time, workflows are synchronized, and bottlenecks are avoided. This allows efficient resource use, flexible production lines, and improved quality and throughput times."
},
{
    title: "Vertical Integration",
    textVertical: "Connects all levels from field level to ERP for smooth data flow and information exchange. Enables real-time control across the entire production chain.",
    textHorizontal: "Vertical: data from CPS to ERP, ERP plans sent downwards.",
    ptext: "Vertical integration connects all levels of the production pyramid, from field level through control and MES to ERP. Production data is continuously reported upwards, while plans and directives from ERP are sent downwards. This creates a closed information loop, enabling real-time control, traceability, and optimized production."
},
{
    title: "IPC",
    textVertical: "Industrial PCs control machines and process production data reliably, connecting the control level with MES and SCADA.",
    textHorizontal: "IPC: robust computers for machine control, data acquisition, and process monitoring.",
    ptext: "Industrial PCs (IPC) are designed for industrial environments. They control machines, collect production data, monitor processes, and communicate with MES and SCADA. Their robustness against dust, vibration, and temperature ensures safe and stable operation, significantly improving CPS reliability and efficiency."
},
{
    title: "Sensors and Actuators",
    textVertical: "Sensors collect data, actuators execute commands, forming the direct interface to physical production.",
    textHorizontal: "Sensors measure process values, actuators control machines or equipment.",
    ptext: "Sensors and actuators form the direct interface of CPS to the real world. Sensors measure physical quantities such as temperature, pressure, humidity, speed, or position. Actuators execute commands into mechanical or electrical actions. Together they form the basis for data acquisition and execution, providing essential information to higher levels of the pyramid to monitor and optimize processes."
},
{
    title: "Influence on CPS",
    textVertical: "ERP, MES, IPC, sensors, and actuators directly influence CPS control and efficiency, ensuring real-time capability.",
    textHorizontal: "Influence: systems and devices provide data, control processes, ensure real-time capability and quality.",
    ptext: "The entire CPS pyramid relies on the interplay of ERP, MES, IPC, sensors, and actuators. ERP plans resources and orders, MES translates these into concrete production commands, IPC controls machines, sensors provide real-time information, and actuators execute commands. Only through this collaboration is the efficiency, flexibility, quality, and safety of CPS ensured."
},
{
    title: "API",
    textVertical: "APIs enable communication between software systems.",
    textHorizontal: "API: defines interfaces, enables data and function exchange between programs.",
    ptext: "An API (Application Programming Interface) is a defined interface through which software systems communicate. It specifies how data can be retrieved or commands sent without knowing internal workings. APIs are essential for integrating IoT devices, MES, ERP, or cloud services, enabling automated, standardized, and secure data exchange for efficient system collaboration and real-time information sharing."
},
{
    title: "Edge Computing",
    textVertical: "Edge Computing processes data close to its source instead of in the cloud.",
    textHorizontal: "Edge: local data processing on devices or gateways, reduces latency and network load.",
    ptext: "Edge Computing moves data processing from centralized data centers to where the data originates, e.g., sensors, actuators, or gateways. This reduces latency, relieves networks, and enables real-time responses for IoT or CPS applications. Local processing allows faster decision-making, reduces security risks, and significantly increases the efficiency of production or smart home systems."
},
{
    title: "FOK / FOAK",
    textVertical: "FOK refers to innovative, one-of-a-kind systems or solutions as prototypes.",
    textHorizontal: "FOK: first-of-a-kind systems, novel prototypes, test concepts and technologies.",
    ptext: "FOK (First-of-a-Kind) describes unique, innovative systems or installations developed as prototypes to test new technologies, concepts, or production processes. These systems gather experience, identify risks, and implement improvements before mass production. In CPS or IoT environments, FOK allows testing of interfaces, real-time data processing, and new automation concepts under real conditions."
},
{
    title: "Rebound Effect",
    textVertical: "Increased efficiency can paradoxically lead to higher consumption.",
    textHorizontal: "Rebound: savings through efficiency are partially offset by changed user behavior.",
    ptext: "The rebound effect describes the phenomenon that efficiency improvements in technology or processes do not always reduce total consumption. If devices become more efficient or processes are optimized, users may adjust behavior, potentially consuming more resources overall. In IoT or CPS contexts, the rebound effect must be considered to realistically plan efficiency gains and evaluate the actual impact of optimizations."
},
{
    title: "Sigfox",
    textVertical: "Sigfox is a low-power wireless network for IoT devices with long range.",
    textHorizontal: "Sigfox: low-power wide-area network, long range, energy-saving, for small data volumes.",
    ptext: "Sigfox is an LPWAN (Low-Power Wide-Area Network) specifically designed for IoT applications. It allows devices to transmit small amounts of data over several kilometers while consuming minimal energy. Key features include low cost, easy implementation, global coverage, and long battery life for sensors."
}

];

quadraten = [];

function init() {
    render();
}

function render() {
    let contentID = document.getElementById("renderContainerId");
    contentID.innerHTML = '';

    kartenDaten.forEach((karte, index) => {   // <--- index hinzugefügt
        contentID.innerHTML += `
          <div class="kartenClass">
            <div class="headContents">
            <div class="titleClass">${karte.title}</div>
              <div class = "buttons">
                  <div class="backClass" onclick="toggleDeckblatt(${index})">Erklärung</div>
                  <div class = "backClass2" onclick = "toggledeckblatt2(${index})">Kurz</div>
                  <div class = "backClass3" onclick = "toggledeckblatt3(${index})">Pr-Satz</div>
               </div>
            </div>

            <div class="textsContainer">
                 <div class="ptexClass">${karte.ptext}</div>
                 <div class="linealvertikal"></div>

                 <div class="deckblatClass " id="deckblatt${index}"></div>
                 <div class = "deckblattSmaller" id = "deckblattKleinerID${index}"></div>
                 <div class = "deckblattSmallest" id = "deckblattSmallestId${index}"></div>

                 <div class="textverticalClass">${karte.textVertical}</div>
            </div>

            <div class="linealHorizontal"></div>
            <div class="textMinimalBelow">${karte.textHorizontal}</div>
          </div>
        `;
    });
}

function toggleDeckblatt(index) {
    const deckblatt = document.getElementById("deckblatt" + index);
    deckblatt.classList.toggle("hide");
}

function toggledeckblatt2(index) {
    const deckblatt2 = document.getElementById("deckblattKleinerID" + index);
    deckblatt2.classList.toggle("hide");
}

function toggledeckblatt3(index) {
    const deckblatt3 = document.getElementById("deckblattSmallestId" + index);
    deckblatt3.classList.toggle("hide")
}
