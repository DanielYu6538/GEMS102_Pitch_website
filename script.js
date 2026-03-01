const teamData = [
    { 
        title: "Computer Engineering / CS", 
        content: "Work on ROS (Robot Operating System), software, and computer hardware. Work on navigation algorithms and data processing. Work on machine learning/AI.", 
        research: `
        <ul>
            <li><a href="https://arxiv.org/abs/2602.04763" target="_blank"><strong>Active Asymmetric Multi-Agent Multimodal Learning under Uncertainty</strong></a></li>
            <li>Communicates with other autonomous vehicles for more data of the environment and use algorithms to suppress inaccurate data (noise) from all vehicles.</li>
            <li><a href="https://doi.org/10.3390/s25247436" target="_blank"><strong>Evaluating LiDAR Perception Algorithms for All-Weather Autonomy</strong></a></li>
            <li>Use machine learning to remove inaccurate data (noise) from sensors.</li>
            <li><a href="https://doi.org/10.1109/TITS.2023.3338996" target="_blank"><strong>SAMFusion: Sensor-Adaptive Multimodal Fusion for 3D Object Detection in Adverse Weather</strong></a></li>
            <li>Use machine learning to identify the best sensor to use based on the distance and weather conditions.</li>
        </ul>
        `
    },
    { 
        title: "Engineering / Science", 
        content: "Work on how signals are affected by rain and optimizing sensor hardware (Optics/Electrical Engineering). Make sure the system is resilient to weather conditions.", 
        research: `
        <ul>
            <li><a href="https://doi.org/10.1038/s41598-024-58549-y" target="_blank"><strong>UV-durable self-cleaning coatings for autonomous driving</strong></a></li>
            <li>Develops a hydrophobic coating that that is effective at improving camera visibility when exposed to rain, fog, and mud, and is resistant to the environmental conditions. </li>
        </ul>
        `
    },
    { 
        title: "Math / Statistics", 
        content: "Work on mathematical models for data validation and analyzing system performance using statistical methods.", 
        research: `
        <ul>
            <li><a href="https://arxiv.org/abs/2602.04763" target="_blank"><strong>Active Asymmetric Multi-Agent Multimodal Learning under Uncertainty</strong></a></li>
            <li>Use math algorithms (Bayesian Aggregation) to suppress inaccurate data (noise) from multiple vehicles.</li>
            <li><a href="https://doi.org/10.3390/s25247436" target="_blank"><strong>Evaluating LiDAR Perception Algorithms for All-Weather Autonomy</strong></a></li>
            <li>Use math algorithms to remove inaccurate data (noise) from LiDAR sensors.</li>
        </ul>
        `
    },
    { 
        title: "Social Sci / Policy", 
        content: "Work with the community to ensure urban robots are designed for accessibility and community safety. Understand the impact of autonomous vehicles on the community."
    }
];

let currentIndex = 0;
const modal = document.getElementById("team-modal");
const modalBody = document.getElementById("modal-body");

function openModal(index) {
    currentIndex = index;
    modalBody.innerHTML = `<h3>${teamData[index].title}</h3><p>${teamData[index].content}</p><h4>Current Research:</h4><p>${teamData[index].research}</p>`;
    modal.style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.team-btn').forEach(btn => {
        btn.addEventListener('click', () => openModal(parseInt(btn.dataset.index)));
    });

    document.querySelector('.close-modal').onclick = () => modal.style.display = "none";
    
    document.querySelector('.left-arrow').onclick = () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : teamData.length - 1;
        openModal(currentIndex);
    };

    document.querySelector('.right-arrow').onclick = () => {
        currentIndex = (currentIndex < teamData.length - 1) ? currentIndex + 1 : 0;
        openModal(currentIndex);
    };

    window.onclick = (event) => { 
        if (event.target == modal) modal.style.display = "none"; 
    };
});