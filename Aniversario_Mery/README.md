# Para Mery Urrutia

Página de aniversario con Bootstrap 5.3.8 y MDB UI Kit 9.3.0 (Material Design for Bootstrap), guardados localmente. Abrir dist/index.html: funciona sin instalación ni conexión a Google Fotos.

Aniversario: 10 de noviembre de 2026. Firma: Dylan Torres.

Cinco fotografías seleccionadas de los enlaces proporcionados: un recuerdo de febrero de 2023, dos de Pucón en febrero de 2026 y dos de la revelación de género de julio de 2026. La noticia del embarazo se fecha el 11 de marzo de 2026, según lo indicado por Dylan; no se confunde con la celebración de julio.

Cada foto revela una dedicatoria única al pulsarla. El diálogo se cierra con la X, Escape o tocando fuera. Incluye navegación por teclado, devolución del foco, estilos móviles y reducción de movimiento.

Las fotos y las frases están en dist/photos y dist/memories.js. Para vista local mediante Node: node preview.cjs, luego http://127.0.0.1:4173.

La versión entregada está guardada localmente; no está publicada en Internet.

Para usar VS Code, abre esta carpeta y ejecuta `npm run dev` en su terminal. Requiere Node.js y npm; no necesita instalar dependencias. La página se sirve en http://127.0.0.1:4173.

Para compartir temporalmente por Internet desde VS Code, abre la vista Puertos (Ports), reenvía el puerto 4173 y completa el inicio de sesión que solicite VS Code. Para que Mery acceda sin tu cuenta, selecciona Visibilidad del puerto > Público y comparte la dirección reenviada. Quien tenga el enlace podrá ver la página. Mantén el computador encendido, el servidor en ejecución y el puerto reenviado mientras la utilicen. Para detenerlo, deja de reenviar el puerto y pulsa Ctrl+C en la terminal del servidor.

Acceso desde otro dispositivo en el mismo Wi-Fi: al ejecutar npm run dev, utiliza la dirección que aparece como En tu red (por ejemplo http://192.168.1.20:4173). El servidor escucha en las interfaces de red. localhost y 127.0.0.1 sirven únicamente en el computador que ejecuta el proyecto. Si ya estaba ejecutándose, detenlo con Ctrl+C y vuelve a iniciarlo para aplicar los cambios.
