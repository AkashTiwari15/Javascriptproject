
        const facts = [
            "A day on Venus is longer than its year.",
            "Neutron stars are so dense that a sugar-cube-sized amount would weigh as much as Mount Everest.",
            "Saturn's moon Titan has rivers, lakes, and seas of liquid methane and ethane.",
            "If you could fold a piece of paper 42 times, it would reach the Moon.",
            "A spoonful of a neutron star would weigh about a billion tons.",
            "There are more stars in the universe than grains of sand on all the Earth's beaches."
        ];

        function showRandomFact() {
            const factElement = document.getElementById("fact");
            const randomIndex = Math.floor(Math.random() * facts.length);
            factElement.textContent = facts[randomIndex];
        }