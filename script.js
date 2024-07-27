var emulator = new V86Starter({
    screen_container: document.getElementById("screen_container"),
    bios: {
        url: "seabios.bin",
    },
    vga_bios: {
        url: "vgabios.bin",
    },
    cdrom: {
        url: "dsl-4.4.10.iso",
    },
    autostart: true,
});