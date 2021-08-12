import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./ContainedParallaxComponent.css";

function ContainedParallaxComponent(props) {
  return (
    <div
      css={css`
        max-width: 960px;
        margin: 0 auto;
        background: #f9f9f9;
        font-size: 24px;
        padding: 25px;
      `}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Gravida arcu ac
        tortor dignissim convallis. Nisl nunc mi ipsum faucibus vitae. Sem
        integer vitae justo eget. Semper viverra nam libero justo laoreet sit
        amet cursus. Adipiscing at in tellus integer feugiat scelerisque varius
        morbi enim. Sed turpis tincidunt id aliquet risus feugiat in ante. Dolor
        morbi non arcu risus quis. Tortor at risus viverra adipiscing at in.
        Urna porttitor rhoncus dolor purus non enim praesent elementum
        facilisis. Dapibus ultrices in iaculis nunc sed augue. Sed libero enim
        sed faucibus turpis in eu mi. Vestibulum mattis ullamcorper velit sed
        ullamcorper morbi tincidunt ornare. Tempus imperdiet nulla malesuada
        pellentesque elit eget gravida. Vel facilisis volutpat est velit egestas
        dui id.
      </p>
      <div className="parallax"></div>
      <p>
        Ac odio tempor orci dapibus ultrices in. Tempus quam pellentesque nec
        nam aliquam. Sed nisi lacus sed viverra. Tristique magna sit amet purus
        gravida quis blandit turpis. Diam ut venenatis tellus in metus
        vulputate. Tristique senectus et netus et malesuada fames ac turpis.
        Magna fermentum iaculis eu non diam phasellus. Morbi quis commodo odio
        aenean sed adipiscing diam. Sed sed risus pretium quam vulputate
        dignissim. Ut enim blandit volutpat maecenas volutpat blandit aliquam.
        Eu lobortis elementum nibh tellus molestie nunc non blandit. Porttitor
        rhoncus dolor purus non enim. Praesent elementum facilisis leo vel
        fringilla est. Nulla pharetra diam sit amet nisl. Curabitur vitae nunc
        sed velit dignissim sodales. Blandit aliquam etiam erat velit.
      </p>
      <div className="parallax"></div>
      <p>
        Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Sed
        enim ut sem viverra aliquet. Lorem sed risus ultricies tristique nulla
        aliquet enim tortor at. Bibendum ut tristique et egestas. Urna cursus
        eget nunc scelerisque viverra mauris. Sit amet risus nullam eget felis
        eget nunc lobortis. Laoreet id donec ultrices tincidunt arcu non
        sodales. Purus ut faucibus pulvinar elementum integer enim neque
        volutpat. Et malesuada fames ac turpis egestas. Facilisis leo vel
        fringilla est ullamcorper eget nulla facilisi etiam. Vitae auctor eu
        augue ut lectus arcu bibendum at varius. Ut tellus elementum sagittis
        vitae et leo duis. Nulla facilisi nullam vehicula ipsum a arcu. Nisl
        tincidunt eget nullam non nisi est. Est ante in nibh mauris cursus
        mattis molestie a.
      </p>
      <div className="parallax"></div>
    </div>
  );
}

export default ContainedParallaxComponent;
