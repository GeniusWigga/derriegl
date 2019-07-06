import React from "react";
import buildClassName from "../../helpers/buildClassName";

export default ({ className }) => {
  return (
    <svg className={buildClassName("bar", null, className)} viewBox="0 0 68 44">
      <path d="M8.128 38.17c.35.071.568.177.762.144.733-.122 1.141.353 1.576.792.385.389.17.811.058 1.226-.006.021.037.056.098.142.86-.272 1.758-.495 2.548-.923.012-.147.039-.224.02-.287-.49-1.617-1.433-3.016-2.178-4.51-.389-.779-.831-1.532-1.258-2.292-.249-.442-.465-.917-.785-1.303-.894-1.079-1.604-2.239-1.894-3.631-.047-.226-.196-.43-.319-.69-1.007.521-1.932 1.015-2.773 1.652-.102.078-.169.202-.305.371.245.093.404.198.568.207.726.043 1.288.476 1.895.788.726.373.926.988.588 1.722-.332.722-.578 1.47-.834 2.217.138.098.217.181.313.215.512.181 1.016.343 1.576.392.859.075 1.516.677 1.016 1.79-.045.1-.1.196-.134.299-.168.515-.331 1.032-.538 1.679zM52.333 4.968c.08.19.09.276.138.32.765.7 1.289 1.577 1.784 2.468a169.805 169.805 0 0 1 2.642 4.899c.53 1.034.988 2.107 1.443 3.178.454 1.069.863 2.156 1.295 3.234.011.027.057.039.162.107.686-.123 1.424-.286 2.076-.7.575-.366 1.128-.767 1.69-1.153-.042-.069-.064-.154-.118-.186a11.08 11.08 0 0 0-.669-.365c-.498-.255-.675-.532-.527-1.028a4.46 4.46 0 0 1 .511-1.076c.289-.463.573-.916.632-1.461-.963-.519-1.884-1.017-2.806-1.512-.559-.3-.614-.386-.494-1.04.131-.716.293-1.426.437-2.139.042-.206.067-.416.103-.649-1.146-.561-2.202-1.208-3.405-1.518-.572-.148-.869-.49-.963-1.053.176-.472.358-.946.531-1.424.165-.458.555-.85.473-1.382-.123-.036-.2-.088-.254-.071-1.352.45-2.561 1.199-3.818 1.847-.311.161-.557.449-.863.704zM15.631 38.54c.35-.164.734-.226.918-.451.718-.882 1.854-.933 2.745-1.462.465-.275 1.058-.346 1.498-.647.767-.525 1.638-.783 2.466-1.152.299-.133.605-.249.905-.379 1.201-.519 2.399-1.047 3.604-1.559.77-.327 1.543-.652 2.328-.941 1.023-.376 2.063-.708 3.09-1.073.445-.158.879-.347 1.313-.532.904-.386 1.798-.799 2.711-1.163.708-.282 1.448-.482 2.157-.761a71.685 71.685 0 0 0 2.919-1.226c1.726-.768 3.439-1.567 5.164-2.337 1.096-.489 2.218-.923 3.306-1.428 1.123-.521 2.222-1.094 3.326-1.654.747-.378 1.498-.751 2.222-1.17.307-.178.582-.441.811-.717.241-.29.314-.644.121-1.019-1.036-2.004-1.725-4.167-2.824-6.146-.883-1.59-1.688-3.224-2.561-4.82-.26-.475-.626-.893-.955-1.328-.362-.478-.886-.619-1.45-.62-.252 0-.514.041-.754.117-1.46.462-2.894.981-4.188 1.828-.971.635-1.915 1.346-3.158 1.355-.034 0-.067.028-.101.039-1.662.544-3.3 1.154-4.885 1.896-.492.231-.949.537-1.422.81-.724.417-1.438.851-2.174 1.246-.759.408-1.618.61-2.339 1.103-.822.06-1.479.56-2.205.863-1.375.573-2.71 1.241-4.052 1.89-.621.3-1.203.682-1.831.963-1.096.491-2.091 1.187-3.249 1.552-.587.185-1.164.414-1.722.672-.558.258-1.086.581-1.63.87-1.667.886-3.341 1.759-4.998 2.665a3.487 3.487 0 0 0-.924.757c-1.089 1.235-1.253 2.636-.235 3.85.187.223.335.477.514.707a15.312 15.312 0 0 1 1.783 2.871c.232.492.534.952.816 1.42.3.499.638.976.915 1.487.538.992 1.039 2.003 1.569 2.999.113.213.284.393.456.625zm50.33-25.764c-.567.759-.94 1.578-1.255 2.384.129.376.402.482.689.546.212.047.436.033.65.071.505.088.979.242 1.419.532.679.448.553 1.109-.052 1.344-.236.092-.44.273-.679.35-2.026.65-3.755 1.922-5.716 2.709-.602.241-1.075.753-1.748.866-.322.054-.64.198-.957.192-.582-.011-1.041.205-1.506.531-.595.417-1.23.781-1.872 1.123a72.393 72.393 0 0 1-3.31 1.683c-1.319.618-2.665 1.175-3.997 1.765-1.73.765-3.455 1.541-5.186 2.303-.466.205-.945.381-1.419.568-1.183.468-2.371.924-3.548 1.409-.539.222-1.051.507-1.649.552a.641.641 0 0 0-.307.099c-.975.694-2.14.883-3.242 1.238-.173.056-.34.131-.508.2-1.516.615-3.038 1.213-4.544 1.849-1.373.581-2.751 1.156-4.083 1.824-.844.423-1.657.907-2.548 1.235-.647.239-1.28.516-1.925.76-.645.245-1.267.493-1.821.949-.465.383-1.054.638-1.621.873-1.14.473-2.306.882-3.452 1.34-.676.27-1.333.587-2.001.876-.233.101-.47.202-.716.265a.64.64 0 0 1-.816-.51c-.095-.474-.094-.939.123-1.389.156-.323.391-.621.344-1.083-.165-.063-.353-.169-.552-.205-.429-.077-.872-.085-1.295-.182-.59-.136-.779-.419-.68-1.037.08-.499.223-.99.358-1.479.105-.381.242-.753.364-1.126-.48-.452-1.028-.485-1.559-.558-.286-.037-.584-.033-.864-.103-.456-.114-.651-.38-.681-.857a3.426 3.426 0 0 1 .331-1.68c.273-.586.648-1.135.705-1.863-.257-.11-.509-.286-.78-.321-.66-.086-1.272-.299-1.883-.542-.232-.092-.5-.087-.744-.154a.902.902 0 0 1-.378-1.552c.292-.274.592-.544.917-.775 1.007-.717 2.027-1.416 3.044-2.118.15-.103.301-.226.47-.275.976-.282 1.666-.939 2.373-1.63.535-.523 1.102-1.061 1.857-1.319.339-.116.66-.311.959-.514 1.684-1.148 3.478-2.086 5.343-2.909 1.627-.719 3.214-1.528 4.819-2.296.426-.204.841-.447 1.288-.587.5-.156.897-.461 1.338-.708.824-.462 1.675-.892 2.556-1.23 2.655-1.02 5.225-2.231 7.648-3.702 1.576-.957 3.277-1.569 4.947-2.281 1.071-.456 2.163-.861 3.248-1.284.168-.066.353-.175.516-.155.672.082 1.137-.277 1.686-.588 1.04-.589 2.157-1.054 3.274-1.491.809-.316 1.675-.486 2.504-.758.339-.111.679-.276.96-.492.906-.698 1.918-1.183 2.97-1.604.741-.298 1.467-.641 2.223-.894A17.833 17.833 0 0 1 58.307.35c.601-.115 1.135.301 1.33.887.159.475.13.938-.075 1.384-.227.497-.489.978-.714 1.476-.201.443-.133.68.297.89.779.38 1.491.915 2.416.961.497.025.853.412 1.151.756.154.178.152.556.107.826-.07.427-.24.837-.357 1.258-.116.419-.234.84-.322 1.266-.085.41.02.598.44.749.48.171.974.302 1.462.449.208.062.423.105.626.181.799.3.817.323 1.293 1.343zm-17.798-2.582c.7-.038 1.128.216 1.503.476.715.496 1.38 1.067 2.042 1.635.184.158.317.401.414.63.384.903.752 1.813 1.108 2.727.104.268.192.553.219.837.051.548-.466.879-.954.624a1.666 1.666 0 0 1-.428-.334c-.673-.718-1.309-1.471-1.7-2.384-.325-.759-.786-1.359-1.497-1.816-.401-.257-.778-.439-1.214-.304-1.008.313-2.068.349-3.08.681-1.792.587-3.548 1.292-5.403 1.689-.593.127-1.147.441-1.717.673-.337.137-.67.283-1.006.422-.94.389-1.895.749-2.817 1.177-.523.243-.99.606-1.493.896-.251.144-.52.264-.793.36-.354.125-.658-.02-.81-.347-.225-.484-.161-.959.273-1.27.53-.38 1.109-.69 1.67-1.026.186-.112.421-.173.563-.324.503-.536 1.166-.707 1.833-.898.451-.129.909-.269 1.326-.479a20.59 20.59 0 0 1 4.703-1.718c1.163-.266 2.27-.771 3.413-1.131a13.241 13.241 0 0 1 2.006-.488c.502-.076 1.008-.098 1.496-.263.165-.056.356-.046.343-.045zm5.364 9.903c-.491-.006-.843-.327-.858-.783-.016-.486.418-.928.885-.901.452.026.842.407.844.826.003.57-.297.865-.871.858z"
            fillRule="evenodd"
            clipRule="evenodd" />
    </svg>
  );
}