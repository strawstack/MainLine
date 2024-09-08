(() => {
    const mk = name => document.createElement(name);

    let code = null;
    
    // Create elements
    const area = mk('div');
    const load = mk('label');
    const input = mk('input');
    const run = mk('div');
    
    area.appendChild(load);
    area.appendChild(input);
    area.appendChild(run);
    document.body.appendChild(area);

    // Input
    input.id = "file";
    input.name = "file";
    input.type = "file";
    input.style.display = "none";

    input.addEventListener("change", e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = readerEvent => {
            code = readerEvent.target.result
        };
    });

    // Area
    area.style.display = "grid";
    area.style.gridTemplateRows = "repeat(3, 1fr)";
    area.style.rowGap = "20px";
    area.style.position = "absolute";
    area.style.top = "20px";
    area.style.right = "20px";
    area.style.width = "120px";
    area.style.height = "160px";
    area.style.color = "white";
    area.style.zIndex = "1000";

    // Load
    load.innerHTML = "load";
    load.setAttribute("for", "file");

    load.style.background = "#555";
    load.style.cursor = "pointer";
    load.style.display = "flex";
    load.style.justifyContent = "center";
    load.style.alignItems = "center";
    
    // Run
    run.innerHTML = "run";

    run.style.background = "#555";
    run.style.cursor = "pointer";
    run.style.justifyContent = "center";
    run.style.alignItems = "center";
    run.style.display = "flex";
    run.style.justifyContent = "center";
    run.style.alignItems = "center";

    run.addEventListener("click", e => {
        if (code !== null) {
            const func = new Function(`${code};main();`);
            func();
        }
    });
})();