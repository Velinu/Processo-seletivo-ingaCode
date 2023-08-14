const elevator = document.querySelector('.elevator');
        const floorButtons = document.querySelectorAll('.floor-button');
        let requests = [];
        let moving = false;
        let currentFloor = 1;

        function requestElevator(floor) {
            requests.push(floor);
            if (!moving) {
                processRequests();
            }
        }

        function processRequests() {
            if (requests.length === 0) {
                return;
            }

            moving = true;
            const targetFloor = requests.shift();

            const distance = Math.abs(currentFloor - targetFloor) * 100;
            const duration = distance * 5;

            elevator.style.transition = `bottom ${duration}ms linear`;
            elevator.style.bottom = `${(targetFloor - 1) * 100}px`;
            

            setTimeout(() => {
                elevator.style.transition = '';
                moving = false;
                currentFloor = targetFloor;
                processRequests();
                playSound();
            }, duration);
        }

        function playSound() {
            const audio = new Audio('elevator_sound.mp3');
            audio.play();
        }