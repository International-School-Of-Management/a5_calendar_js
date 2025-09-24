

        // 0. Kurs-Details anzeigen: 
        document.querySelectorAll('.more-button').forEach(button => {
            button.addEventListener('click', () => {
                const box = button.closest('.course-box');

                // Erweitere/Reduziere nur die aktuelle Box
                box.classList.toggle('expanded');

                // Ändere den Button-Text
                if (box.classList.contains('expanded')) {
                    button.innerHTML = ' ❮ Weniger';
                } else {
                    button.innerHTML = ' ❯ Mehr';
                }
            });
        });


        // Hier kommen die JavaScript-Funktionen für die Interaktivität
        // 1. Filterfunktion für Kurse

        function filterCoursesByLanguage() {
            const deutschCheckbox = document.getElementById('deutsch-checkbox');
            const englishCheckbox = document.getElementById('english-checkbox');
            const courseBoxes = document.querySelectorAll('.course-box');

            courseBoxes.forEach(box => {
                const isDeutsch = box.classList.contains('deutsch');
                const isEnglish = box.classList.contains('englisch');

                if ((deutschCheckbox.checked && isDeutsch) ||
                    (englishCheckbox.checked && isEnglish) ||
                    (!deutschCheckbox.checked && !englishCheckbox.checked)) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        }

        document.getElementById('deutsch-checkbox').addEventListener('change', filterCoursesByLanguage);
        document.getElementById('english-checkbox').addEventListener('change', filterCoursesByLanguage);

        filterCoursesByLanguage();


        // 2. Aktualisierung des Kalenders basierend auf der Kursauswahl

        const nodates = [
            "French Beginners",
            "French Advanced",
            "Spanish Advanced",
            "Spanish Beginners (Gruppe 1)",
            "Italian Beginners",
            "German Fortgeschritten",
            "Wissenschaftliches Arbeiten - Wie schreibe ich meine Thesis?",
            "Scientific Methods Advanced - How do I write my thesis?"
        ]

        const lectures = {
             "Arbeiten mit Citavi und Citavi Web": [
                { start: "2025-04-03 18:30", end: "2025-04-03 19:30" }
            ],
            "Work with Citavi": [
                { start: "2025-04-24 18:30", end: "2025-04-24 19:00" }
            ],
            "Techniken zur Webseiten-Erstellung": [
                { start: "2025-04-15 18:00", end: "2025-04-15 19:30"},
                { start: "2025-04-24 18:00", end: "2025-04-24 19:30"},
                { start: "2025-05-07 18:00", end: "2025-05-07 19:30"},
                { start: "2025-05-14 18:00", end: "2025-05-14 19:30"},
                { start: "2025-05-15 18:00", end: "2025-05-15 19:30"},
                { start: "2025-05-21 18:00", end: "2025-05-21 19:30"},
            ],
            "Schnupperkurs SAP": [
                { start: "2025-04-07 19:00", end: "2025-04-07 21:00"},
                { start: "2025-04-14 19:00", end: "2025-04-14 21:00"},
                { start: "2025-04-28 19:00", end: "2025-04-28 21:00"},
                { start: "2025-05-12 19:00", end: "2025-05-12 21:00"},
            ],
            "Word - Umgang mit einer Dokumentenvorlage (Thesis, Hausarbeit)": [
                { start: "2025-04-29 18:30", end: "2025-04-29 19:30" }
            ],
            "Wirkungsvolle Präsentationen und Vorträge mit MS Powerpoint": [
                { start: "2025-04-10 19:45", end: "2025-04-10 21:15"},
                { start: "2025-04-15 19:45", end: "2025-04-15 21:15"},
                { start: "2025-04-30 19:45", end: "2025-04-30 21:15"},
                { start: "2025-05-07 19:45", end: "2025-05-07 21:15"},
                { start: "2025-05-15 19:45", end: "2025-05-15 21:15"},
            ],
            "Photoshop - Bildbearbeitung im Online-Marketing": [
                { start: "2025-04-10 18:00", end: "2025-04-10 19:30"},
                { start: "2025-04-24 19:45", end: "2025-04-24 21:15"},
                { start: "2025-04-30 18:00", end: "2025-04-30 19:30"},
                { start: "2025-05-14 19:45", end: "2025-05-14 21:15"},
            ],
            "Spanish Beginner (Gruppe 2)": [
                { start: "2025-04-01 18:00", end: "2025-04-01 20:00"},
                { start: "2025-04-08 18:00", end: "2025-04-08 20:00"},
                { start: "2025-04-15 18:00", end: "2025-04-15 20:00"},
                { start: "2025-04-22 18:00", end: "2025-04-22 20:00"},
                { start: "2025-04-29 18:00", end: "2025-04-29 20:00"},
                { start: "2025-05-06 18:00", end: "2025-05-06 20:00"},
                { start: "2025-05-13 18:00", end: "2025-05-13 20:00"},
                { start: "2025-05-20 18:00", end: "2025-05-20 20:00"},
                { start: "2025-05-27 18:00", end: "2025-05-27 20:00"},
            ],
            "German Beginner (Gruppe 1)": [
                { start: "2025-03-31 18:15", end: "2025-03-31 20:00"},
                { start: "2025-04-07 18:15", end: "2025-04-07 20:00"},
                { start: "2025-04-14 18:15", end: "2025-04-14 20:00"},
                { start: "2025-04-28 18:15", end: "2025-04-28 20:00"},
                { start: "2025-05-05 18:15", end: "2025-05-05 20:00"},
                { start: "2025-05-12 18:15", end: "2025-05-12 20:00"},
                { start: "2025-05-19 18:15", end: "2025-05-19 20:00"},
                { start: "2025-05-26 18:15", end: "2025-05-26 20:00"},
                { start: "2025-06-02 18:15", end: "2025-06-02 20:00"},
            ],
            "Chinese Culture & Intercultural Competence Development": [
                { start: "2025-04-08 18:00", end: "2025-04-08 19:30"},
                { start: "2025-04-15 18:00", end: "2025-04-15 19:30"},
                { start: "2025-04-24 18:00", end: "2025-04-24 19:30"},
                { start: "2025-04-29 18:00", end: "2025-04-29 19:30"},
                { start: "2025-05-06 18:00", end: "2025-05-06 19:30"},
                { start: "2025-05-13 18:00", end: "2025-05-13 19:30"},
            ]
        };


        function isLectureSelected(lecture) {
            const checkbox = document.querySelector(`input[type="checkbox"][value="${lecture}"]`);
            return checkbox && checkbox.checked;
        }

        let currentDate = new Date();

        function generateCalendar(year, month) {
        console.log(`Generating calendar for ${year}-${month + 1}`);
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        const calendarBody = document.getElementById("calendar-body");
        if (!calendarBody) {
            console.error("calendar-body%20element%20not%20found");
            return;
        }
        calendarBody.innerHTML = "";

        const monthYearElement = document.getElementById("month-year");
        if (monthYearElement) {
            monthYearElement.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;
        } else {
            console.error("month-year%20element%20not%20found");
        }

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startingDay) {
                    const cell = document.createElement("td");
                    row.appendChild(cell);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    const cell = document.createElement("td");
                    cell.textContent = date;

                    const currentDateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
                    console.log(`Checking date: ${currentDateString}`);

                    for (const [lecture, dates] of Object.entries(lectures)) {
                        if (isLectureSelected(lecture)) { // Prüfen, ob der Kurs ausgewählt ist
                            dates.forEach(lectureDate => {
                                if (lectureDate.start.startsWith(currentDateString)) {
                                    const startTime = lectureDate.start.split(' ')[1];
                                    const endTime = lectureDate.end.split(' ')[1];
                                    const lectureElement = document.createElement("div");
                                    lectureElement.textContent = `${lecture} ${startTime} - ${endTime}`;
                                    lectureElement.classList.add("lecture");
                                    cell.appendChild(lectureElement);
                                }
                            });
                        }
                    }

                    row.appendChild(cell);
                    date++;
                }
            }
            calendarBody.appendChild(row);
        }
    }




        // 3. Überprüfung auf Terminkonflikte        
        function isOverlapping(lecture1, lecture2) {
            const start1 = new Date(lecture1.start);
            const end1 = new Date(lecture1.end);
            const start2 = new Date(lecture2.start);
            const end2 = new Date(lecture2.end);

            return (start1 < end2 && start2 < end1);
        }

        function checkOverlaps() {
            const selectedLectures = Object.entries(lectures)
                .filter(([lecture, _]) => isLectureSelected(lecture));

            const overlaps = [];

            for (let i = 0; i < selectedLectures.length; i++) {
                for (let j = i + 1; j < selectedLectures.length; j++) {
                    const [lecture1, dates1] = selectedLectures[i];
                    const [lecture2, dates2] = selectedLectures[j];
                    
                    for (const date1 of dates1) {
                        for (const date2 of dates2) {
                            if (isOverlapping(date1, date2)) {
                                overlaps.push([lecture1, lecture2, date1, date2]);
                            }
                        }
                    }
                }
            }

            const warningElement = document.getElementById("warning_overlap");
            if (overlaps.length > 0) {
                const conflictMessages = overlaps.map(([l1, l2, d1, d2]) => 
                    `${l1} und ${l2} am ${new Date(d1.start).toLocaleDateString()}`
                );
                warningElement.innerHTML = "Achtung: Es gibt Terminüberschneidungen in den ausgewählten Kursen:<br>" + 
                    conflictMessages.join("<br>");
            } else {
                warningElement.textContent = "";
            }

            return overlaps;
        }

        document.querySelectorAll('#course-filter input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
                checkOverlaps();
            });
        });


        // Event Listeners für die Navigationsbuttons
        const prevMonthButton = document.getElementById("prev-month");
        const nextMonthButton = document.getElementById("next-month");

        if (prevMonthButton) {
            prevMonthButton.addEventListener("click", () => {
                currentDate.setMonth(currentDate.getMonth() - 1);
                generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
            });
        } else {
            console.error("prev-month%20button%20not%20found");
        }

        if (nextMonthButton) {
            nextMonthButton.addEventListener("click", () => {
                currentDate.setMonth(currentDate.getMonth() + 1);
                generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
            });
        } else {
            console.error("next-month%20button%20not%20found");
        }

        // Initial calendar generation
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());



        checkOverlaps();


    
