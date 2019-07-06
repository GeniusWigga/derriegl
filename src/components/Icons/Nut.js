import React from "react";
import buildClassName from "../../helpers/buildClassName";

export default ({ className }) => {
  return (
    <svg className={buildClassName("nut", null, className)} viewBox="0 0 78 79" enableBackground="new 0 0 78 79">
      <defs>
        <filter id="a" filterUnits="userSpaceOnUse" x="0" y=".2" width="77.9" height="78.8">
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
        </filter>
      </defs>
      <mask maskUnits="userSpaceOnUse" x="0" y=".2" width="77.9" height="78.8" id="b">
        <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M0 .2h77.9V79H0z" filter="url(#a)" />
      </mask>
      <path d="M36.2 20.8v.5c-.1.3.1.6.2.9.1.2.3.2.4.1.2-.2.4-.4.4-.6 0-.6.4-1.1.6-1.7.2-.5.6-1 .9-1.5.1-.2.4-.3.7-.3.4-.1.6.4 1 .4.1 0 .3.1.4.1.8-.2 1.5.1 2.1.7.3.2.5.6.6.9.1.2.2.2.3.2.3 0 .6-.1.9-.1.1 0 .2.1.3.1.2.2.3.4.4.6.3.3.7.6 1 .8l.1.1c0 .2.2.3.3.5.4.3.7.7 1 1 .4.4.9.7 1.3 1.1.2.1.3.2.5.3.3.1.5.2.8.4.1.1.3.1.4.1 0-.1.1-.3 0-.4-.1-.3-.2-.5-.3-.8-.3-.5-.4-1-.4-1.5 0-.8-.2-1.5-.8-2-.4-.4-.4-.8-.4-1.3 0-.1.1-.3.2-.3.3-.2.7-.3 1.1-.4.2-.1.3-.2.1-.4-.2-.2-.4-.3-.6-.5l-1.2-1.2c-.6-.6-1.2-1.1-1.7-1.7-.2-.3-.5-.5-.7-.8-.3-.4-.5-.8-.8-1.1-.4-.5-.9-.9-1.3-1.4l-1.1-1.1c-.2-.2-.3-.4-.4-.6-.4-.6-.7-1.2-1.2-1.7 0 0 0-.1-.1-.1-.3-.4-.6-.7-1-1.1-.3-.3-.3-.3-.6.1-.2.3-.5.7-.7 1-.2.3-.5.5-.8.8-.3.2-.6.4-.9.5-.5.2-1 .3-1.5.5-.3.2-.8.2-1 .5h-.1c-.1 0-.2 0-.3.1-.4.2-.7.4-1 .7-.2.2-.4.4-.7.6l-.1.1c-.3.1-.6.1-.8.2-.3 0-.6.2-.7.5-.1.3-.3.4-.7.4h-.2c-.1.2-.3.2-.5.2-.1.1-.3.3-.3.4 0 .1.2.3.4.2.2-.1.3 0 .3.2 0 .1.1.2.1.2.3.4.5 1.1 0 1.6-.2.2-.3.4-.5.6-.2.3-.3.5-.7.5.1-.4.1-.1.1.1s.1.2.3.2c.1 0 .2-.1.4-.1.4 0 .8-.2 1.2-.2.5-.1.9 0 1.4 0 .3 0 .5.1.8.2h.7c.1 0 .2 0 .3.1.2.1.4.2.5.4.1.1.2.2.3.4.2.3.3.7.6 1.1.5.3.8.9.7 1.7zM11.8 63.6c-.1-.3-.4-.3-.7-.4h-.5c-.5-.2-1 0-1.5 0-.1 0-.2.1-.3.1-.2-.1-.3 0-.3.1s.1.3.2.5c.1 0 .3.1.4.2.1.1.2.3.4.3.3 0 .4.2.6.3 0 0 .1.1.2.1.2.2.5.3.7.5.2.1.3.2.5.3.2.1.4.2.4.3.1.5.5.5.9.6.4.1.7.2 1 .5.3.3.5.4.9.4.2 0 .3.1.4.3 0 .1.1.1.2.2.4.2.8.3 1.2.6.3.1.5.4.7.5.5.3 1.1.6 1.7.7.2 0 .4.2.6.4.1.1.2.1.3.2.1 0 .1.1.2.1.2.1.4.3.7.4.3.1.6.3 1 .2h.1c.1.3.4.3.6.4.4.2.9.4 1.3.5.7.2 1.4.3 1.8.9 0 .1.1.1.2.1.4.1.7.1 1.1.3.3.1.6.3.9.5.1 0 .1.1.2.1.1.1.2.1.3.2.1 0 .1.1.2.2.3.1.5.1.8.2.1 0 .2.1.2.2.1.3.4.4.6.4.5.1.9.2 1.4.3.6.1 1.2.3 1.8.4.5.1 1 .1 1.5.2.7.2 1.4 0 2.1.3.6 0 1.1.2 1.7.1.3-.1.6.1.9.2.4 0 .8 0 1.3.1.4 0 .9.1 1.3.2.7 0 1.4 0 2.2.1.5 0 1 .2 1.6.2.9 0 1.9 0 2.8-.1.3 0 .5-.1.8-.2.2-.1.5-.2.7-.2l1.8-.3h.1c.5-.2 1-.5 1.5-.7.4-.2.8-.3 1.2-.5.4-.2.8-.4 1.1-.5.3-.1.5-.2.8-.2.1 0 .2 0 .2-.1.1-.2.3-.2.5-.3.3-.1.6-.4 1-.5.2-.1.2-.2.2-.4 0-.1-.2-.1-.3-.1-.5 0-1.1.1-1.6.1-.2 0-.5-.1-.7-.1-.9 0-1.7.1-2.6.2-.5 0-1 .1-1.4.2h-.3c-.7-.2-1.5-.1-2.2-.2h-.1c-.3 0-.7 0-1 .1-.3 0-.7.1-1 .1-.7 0-1.3 0-2-.1s-1.5.1-2.2-.2H43c-.4 0-.8.1-1.2 0-.6 0-1.3-.1-1.9-.1-.2 0-.5-.1-.7 0-.7 0-1.3-.2-2-.1-.1 0-.1 0-.2-.1-.1 0-.3-.1-.4-.1-.7-.2-1.4-.3-2.1-.5-.2 0-.4-.1-.5-.2-.3-.1-.5-.2-.7-.3-.2-.1-.5-.2-.7-.3-.3-.1-.5-.3-.7-.5-.1-.1-.2-.1-.3-.2-.3-.2-.5-.4-.8-.6-.4-.3-.8-.6-1.3-.9-.4-.3-.9-.5-1.3-.7-.3-.2-.5-.5-.8-.6-.5-.2-1-.7-1.4-1.1-.5-.4-1-.7-1.6-.8-.1 0-.2-.1-.3-.1-.4-.1-.8-.3-1.2-.4l-1.2-.3c-.3-.1-.7-.2-1.1-.2-.1 0-.2.1-.3.1-.3.2-.6.2-.8 0-.2-.3-.5-.7-.9-.7-.1 0-.3.1-.4.1-.5 0-1.1 0-1.6-.1-.4 0-.7-.1-1.1-.1-.4 0-.7-.1-1-.3 0 0-.1-.1-.2-.1-1.1-.3-1.8-.3-2.5-.3zm50-13.2c.7.2.9.5.8 1.1v.8c0 .5-.1.9-.2 1.4 0 .2-.3.4-.2.6.1.3 0 .5-.1.8-.1.4-.2.7-.3 1.1 0 .1-.1.1-.1.2-.1.2-.3.3-.3.5-.1.5-.1 1-.2 1.6 0 .1 0 .3-.1.4-.2.3-.2.7-.3 1-.2.7-.6 1.4-.7 2.2-.1.5-.3 1-.5 1.5-.2.6-.4 1.1-.7 1.7-.2.5-.6 1-.6 1.5 0 0 0 .1-.1.1l-.8.8c-.1.1-.1.1-.1.2-.2.5-.5.9-1 1.1-.1 0-.1.2-.2.2-.2.3-.3.5-.5.8-.1.2-.4.2-.6.4-.1.1-.3.3-.2.5.1.1.3.2.4.2.4 0 .7-.1 1.1 0 .8.1 1.6.1 2.3-.1h.3c.5.2 1 .4 1.5.7.2.1.3.2.5.1.1 0 .3-.1.4-.2.6-.1 1-.6 1.6-.8.1 0 .2-.2.3-.2.4-.2.8-.4 1.2-.7.5-.4.9-.8 1.4-1.1.4-.2.7-.6 1.1-.8.2-.2.4-.3.6-.5.5-.3 1-.6 1.5-1l1.2-.9c.4-.4.9-.8 1.2-1.3.3-.5.7-.9 1.1-1.4v-.1c.1-.3.2-.6.4-.8.4-.4.5-.8.7-1.2.2-.4.4-.8.6-1.1.2-.3.5-.6.4-1.1 0-.1.1-.2.1-.2.1-.1.2-.2.3-.4l.3-1.2c.1-.3.2-.6.2-.9.1-.5.1-1 .1-1.6 0-.9-.2-1.7-.1-2.6v-.9c0-.9.1-1.8-.2-2.7-.2-.6-.3-1.2-.5-1.7-.1-.4-.2-.7-.4-1.1l-.3-.9c-.1-.4-.2-.8-.3-1.1-.2-.7-.4-1.3-.6-2-.1-.3-.1-.7-.3-1-.4-.7-.7-1.5-1.3-2.1-.2-.2-.3-.4-.4-.6-.1-.1-.2-.3-.3-.4-.2-.3-.5-.5-.7-.8-.3-.5-.6-.9-.9-1.4-.2-.3-.4-.5-.6-.8-.3-.6-.6-1.2-1.2-1.5-.1 0-.1-.2-.1-.2 0-.1-.1-.1-.1-.1-.2-.2-.5-.3-.7-.5l-.3-.3c-.3-.2-.7-.4-1-.7-.4-.4-.8-.9-1.3-1.2-.2-.2-.4-.4-.7-.6l-.6-.3c-.6-.5-1.1-1-1.7-1.6-.2-.1-.4-.3-.5-.4l-.4-.4c-.4-.3-.8-.5-1.1-.8-.4-.3-.7-.7-1-1.1-.3-.3-.7-.6-1-1-.3-.4-.6-.6-1.1-.6-.1 0-.2-.1-.3-.1-.1-.1-.3-.1-.4-.2-.2-.1-.4-.1-.5-.3-.2-.4-.6-.6-1-.9-.1-.1-.3-.2-.5-.3-.3-.1-.6-.1-.8-.2-.3-.3-.7-.2-1.1-.2-.2 0-.3.2-.2.4.4.4.4 1 .4 1.5.1.5 0 .9.4 1.3.3.3.5.7.7 1.1.2.4.4.9.2 1.3-.1.2 0 .3.2.3.4.1.8.1 1.1.4.1.1.4.2.6.2.7.1 1.2.4 1.8.7.2.1.4.3.7.5.4.3.8.5 1.2.8.1 0 .2 0 .2.1.4.4.8.8 1.1 1.2.1.1.2.4.3.5.4.5.7.9 1.1 1.4.1.2.3.3.3.5.2.5.5.9.7 1.4.1.2.3.4.4.5.1.1.2.3.3.4.1.3.2.5.4.7.2.2.4.4.5.6.2.3.3.6.4 1 .1.2.2.5.3.7l.6 1.2c.1.3.2.5.3.8.1.2.1.3.2.5.2.5.1 1.1.4 1.5v.3c0 .1 0 .2.1.3 0 .1.1.3.1.4 0 .1.1.2.1.4.2.4.3.7.5 1.1.1.2.1.5.2.7.3.3.3.7.3 1v.2c.4.3.4.7.4 1.1.1.5.1 1 .2 1.5.1.4.2.9.2 1.3v6c0 .6-.1 1.2-.1 1.7 0 .2-.1.3-.1.4 0 .4 0 .8-.1 1.2-.1.8-.3 1.5-.5 2.3-.2.7-.3 1.4-.7 1.9-.3.6-.5 1.2-1.1 1.6-.2.6-.9.9-1.1 1.5-.1.3-.4.6-.7.8-.3.3-.5.5-.9.8-.3.2-.5.2-.9 0-.3-.2-.4-.2-.3-.6 0-.1.1-.1.1-.2.1-.1.2-.2.2-.3.1-.2.2-.4.3-.5.1-.2.2-.3.3-.5.2-.4.4-.7.7-1.1.2-.3.5-.6.8-.9.1-.1.2-.2.3-.4.2-.3.4-.6.6-1 .1-.1.1-.3.2-.5s.3-.4.3-.6c.1-.3 0-.7.1-1V61c.2-.5.4-1.1.4-1.6 0-.4.2-.8.1-1.1 0-.3 0-.6.2-.8.2-.3.1-.5 0-.8-.1-.2-.1-.4 0-.5.2-.2.1-.4 0-.6v-.3c.2-.3.2-.6.1-.9-.1-.3-.1-.6-.2-1V53v-.4c0-.4 0-.8.1-1.1.3-.4-.2-.8 0-1.1-.1-.4-.2-.9-.3-1.3-.1-.4-.1-.8-.2-1.1-.1-.4-.2-.7-.3-1.1-.1-.5-.1-1.1-.5-1.5-.1-.1 0-.2-.1-.3-.1-.2-.1-.4-.2-.6-.1-.3-.3-.5-.3-.8 0-.4 0-.7-.3-1.1l-.3-.6c-.1-.4-.3-.8-.4-1.2-.1-.3-.2-.6-.3-.8-.1-.3-.3-.6-.4-.9-.3-.5-.6-1-.8-1.4-.2-.3-.3-.8-.6-1-.5-.4-.6-1.1-1.1-1.5v-.1c0-.3-.2-.5-.4-.7l-.1-.1c-.2-.4-.4-.9-.6-1.3-.2-.3-.5-.5-.6-.8 0-.1-.1-.2-.1-.2L57 30.8c-.1-.1-.2-.2-.4-.3-.5-.3-1-.5-1.5-.8-.1 0-.1-.1-.1-.2-.1-.1-.2-.1-.2-.2-.4-.3-.9-.3-1.3-.5s-.9-.1-1.2-.6c-.2-.3-.6-.5-.6-.9 0-.1-.1-.1-.2-.2-.5.5-1.1.5-1.4.1-.3 0-.6-.1-.8-.1-.3-.1-.6-.1-.9-.3l-.9-.6c-.2-.2-.5-.3-.7-.5-.4-.3-.7-.6-1-1l-.3-.3-.5-.5c-.2-.3-.4-.6-.6-1-.4-.6-1.2-.5-1.6-1.2h-.1c-.2-.1-.4-.1-.6-.2-.2-.1-.4-.2-.5-.3l-.5-.5c-.2-.2-.2-.6-.5-.6-.5-.1-1.1-.1-1.6-.1-.1 0-.2 0-.2.1-.3.3-.6.6-.8.9-.2.3-.2.7-.4 1-.2.6-.5 1.1-.4 1.8 0 .3-.2.6-.5.7-.2.1-.5 0-.7-.1-.3-.1-.5-.3-.8-.4-.5-.2-.9-.4-1.2-.8-.1-.2-.3-.5-.4-.7-.1-.5 0-1-.1-1.6 0-.1-.1-.2-.1-.4-.1-.2-.3-.3-.4-.5-.1-.5-.4-.8-.7-1.1-.3-.2-.6-.3-.9-.4-.4-.1-.9 0-1.3 0-.2 0-.4 0-.7.1-.2 0-.3.1-.5.2-.1 0-.2 0-.3.1-.4.1-.8.3-1.2.4-.4.1-.9.2-1.4.3-.2 0-.5.1-.7.1-.1 0-.2 0-.3-.1-.2-.1-.4-.2-.6.1l-.2.2c-.4.1-.8.1-1.1.2-.6.1-1.2.1-1.5.9-.1.2-.3.3-.4.4-.1 0-.2-.1-.3-.2 0 0-.1 0-.1-.1-.3-.2-.4-.9-.2-1.2.2-.3.4-.5.7-.5.4-.1.8-.3 1.1-.4.4-.1.8-.2 1.1-.5h.2l.9-.3c.4-.2.8-.6 1.2-.8.6-.3 1.2-.7 1.7-1 .5-.3.7-.8.4-1.3-.1-.1-.3-.2-.4-.3h-.9c-.1 0-.3 0-.4.1-.3.1-.6.3-.9.3-.5.1-1.1.2-1.5.6-.1.1-.2.1-.3.1-.6.2-1.1.4-1.7.7-.4.2-.7.4-1.1.6-.3.1-.6.3-.8.4l-1.2.6c-.2.1-.3.3-.5.3-.6 0-.9.5-1.3.7-.6.3-.9.9-1.6 1.1-.4.2-.7.4-1.1.7-.3.2-.7.5-1 .8-.2.2-.3.4-.6.5-.2.1-.5.2-.7.4-.4.3-.9.6-1.2 1.2l-.1.1c-.3.2-.5.5-.8.7-.2.2-.4.4-.6.4-.3.1-.5.3-.7.5-.3.5-.7.9-1 1.4-.2.3-.4.6-.7.9 1.2-.4 1.2-.2 1-.1-.2.1-.3.3-.3.5 0 .1 0 .1-.1.2-.4.7-.7 1.5-1.1 2.2-.1.2-.2.3-.3.5 0 .4-.1.8-.2 1.2-.1.3-.1.7-.2.9-.2.3-.2.6-.3.9-.1.4-.2.8-.5 1.2-.2.3-.3.7-.4 1-.1.6-.2 1.1-.3 1.7-.1.5-.2 1.1-.4 1.6-.1.3-.3.6-.3.9-.1.6-.2 1.2-.4 1.8-.1.7-.3 1.4-.4 2v.7c-.1.7-.2 1.3-.3 2 0 .3-.2.7-.2 1V50.9c.1.5.3 1 .4 1.5.1.5.2 1.1.3 1.6 0 .3 0 .6.1.8.2.7.5 1.4.7 2 .1.3.2.7.4 1 .2.4.5.8.7 1.2.1.1.2.3.3.4.3.3.4.8.8.9l.1.1c.4.4.7.8 1.1 1.2.2.2.3.1.4 0 .3-.1.6-.3.8-.4.3-.1.6-.1.9-.1.2 0 .4-.2.3-.4-.3-.6-.4-1.2-.8-1.8-.3-.3-.4-.7-.6-1.1 0 0 0-.2-.1-.4-.1-.4-.2-.7-.3-1.1-.1-.3-.1-.6-.2-.8-.1-.3-.2-.5-.3-.8-.1-.1-.2-.3-.2-.4-.1-.3-.2-.6-.3-.8 0-.1-.1-.2-.1-.3 0-.6-.1-1.3-.1-1.9v-2.5c0-.2-.1-.5-.1-.7 0-.8.1-1.5.1-2.3 0-.5-.1-1-.2-1.5 0-.5 0-1 .1-1.4.1-.7.2-1.3.3-1.9.1-.4.1-.8.1-1.2 0-.3.1-.6.1-.8 0-.8.2-1.6.5-2.4.3-.7.5-1.5.8-2.2.1-.3.4-.6.5-.9.1-.1.1-.2.2-.3.1-.2.2-.4.4-.5.2-.2.5-.3.5-.6.1-.5.4-.6.9-.6.1-.5.4-.9.8-1.1.5-.2.8-.6 1.2-1l1.5-1.8c.3-.4.7-.7 1.1-1 .6-.3 1.2-.8 1.9-1 .1 0 .1-.1.2-.1.1-.1.3-.3.4-.3.3 0 .5-.2.7-.4.1 0 .1-.1.2-.1.3-.1.6-.2.8-.3.4-.3.8-.7 1.4-.7h.1c.1-.3.3-.4.6-.5.2-.1.3-.2.5-.2.2-.1.5-.3.7-.4.2-.1.5-.3.8-.4.3-.1.6-.4 1-.4s.5.2.3.6c-.1.3-.3.4-.6.5-.3.1-.7.2-.9.6-.1.2-.4.2-.6.4l-.9.6-1.5.9c-.4.3-.8.6-1.4.7 0 0-.1 0-.1.1-.3.2-.5.5-.8.7l-.6.3c-.2.1-.3.2-.5.3-.2.1-.4.3-.5.4-.2.2-.5.3-.7.5l-.2.2c-.3.2-.6.5-.8.9-.1.2-.3.5-.5.6-.5.2-.7.6-1.1.9-.3.2-.5.6-.7.9-.1.1-.3.2-.4.3-.1.1-.3.2-.4.3-.1.2-.2.4-.4.6-.2.3-.5.6-.6 1 0 .2-.2.4-.4.5-.1.1-.2.3-.3.4-.3.6-.5 1.2-.8 1.9-.1.1-.2.3-.2.4-.2.6-.3 1.3-.4 1.9-.1.8-.2 1.7-.3 2.5 0 .3.1.7-.2 1v5.4c0 1 .1 2.1.1 3.1.1.9-.1 1.7.3 2.6.3.6.3 1.2.7 1.8.2.3.1.7.3 1 .1.1.1.3.2.4.2.5.4 1.1.6 1.6 0 .1 0 .1.1.2.1.2.3.4.4.7.1.2.2.5.3.8.1.4.3.7.4 1.1.1.2.4.7.7.8.4.1.9.1 1.3.2.3 0 .6.1 1 .2.9.2 1.9.4 2.9.4.2 0 .3-.1.3-.3-.1-.2-.2-.5-.2-.7-.1-.5-.1-1-.1-1.4 0-.1-.1-.2-.1-.2-.1-.3-.3-.5-.3-.9 0-.5-.1-.9-.1-1.4 0-.5-.1-1-.2-1.5 0-.3.2-.6 0-1-.1-.1.1-.4.1-.6 0-.3-.1-.6-.1-.8 0-.6.1-1.1.2-1.7 0-.3-.1-.7 0-1l.3-1.5c0-.2.1-.4.1-.6.1-.3.3-.5.3-.8.1-.5.1-.9.2-1.4 0-.1 0-.2.1-.2l.9-1.8c.1-.2.4-.4.6-.6.1-.1.2-.1.2-.2.1-.2.2-.5.3-.7.2-.5.6-.8 1-1h.3c.1 0 .1.1.2.2v.2c-.3.1-.4.5-.4.7-.1.3-.3.4-.4.6-.2.3-.5.5-.4 1 0 .1 0 .2-.1.2-.1.2-.3.4-.4.6l-.6 1.5c-.3.5-.3 1-.4 1.6-.1.4 0 .8-.3 1.2-.2.3-.3.5-.2.9v.7c0 .7-.3 1.4-.1 2.2.1.5.1 1 .1 1.5 0 .9.1 1.7.2 2.6.1.6.2 1.3.3 2 0 .2 0 .5.1.7.2.6.4 1.1.5 1.7 0 .3.3.6.5.6l1.5.3c.2 0 .4.1.7.2.2.1.4.1.6.2.2.1.3.2.5.2.4.1.8.1 1.2.3.2.1.6.1.8.2.9.4 1.7.8 2.4 1.4.5.5 1.2.8 1.7 1.3.2.2.4.1.5-.1.4-.5.8-1.1 1.2-1.6.1-.1.2-.3.3-.4.2-.3.4-.6.6-1 .1-.1.2-.3.2-.4.1-.1.2-.2.2-.3.1-.6.6-1.1.6-1.7l.1-.1c.1-.3.4-.4.2-.8 0 0 0-.1.1-.1.1-.1.1-.3.2-.4.1-.4.3-.8.4-1.2.1-.2.2-.4.2-.7.1-.4 0-.7.3-1 .1-.1.1-.2.1-.3.2-.5.3-1.1.6-1.6.3-.8.5-1.6.8-2.3.1-.2 0-.4.1-.6.1-.5.3-1 .4-1.5.1-.7.2-1.4.2-2.1 0-.3.2-.5.5-.6.1-.1.3 0 .5.1v.4c0 .2-.1.4-.1.7 0 .3.1.5 0 .8-.2.5-.4 1.1-.4 1.6-.1.5-.2 1.1-.2 1.6 0 .2-.1.5-.2.7-.1.1-.2.3-.2.4 0 .3.1.5.1.7-.1.2-.2.4-.3.5-.1.2-.2.3-.2.5-.1.4-.5.8-.3 1.3 0 .1-.1.2-.2.3-.2.2-.3.3-.2.6.1.1.1.3 0 .5-.1.5-.4.9-.4 1.4 0 .1 0 .1-.1.2-.3.7-.7 1.3-.8 2.1 0 .1 0 .1-.1.2-.1.2-.1.3-.2.5 0 .1-.1.2-.2.3-.1.3-.4.5-.4.8 0 .3-.2.6-.3.8-.3.5-.8.9-1.1 1.4-.2.3-.3.6-.5.8-.1.2-.2.3-.3.4.2.1.3.2.3.3.1.1.2.2.4.3.3.2.7.4 1 .7.2.3.4.4.7.5.1 0 .3.1.4.1.3.2.5.4.8.5.2.1.5.2.8.2.4.1.8.2 1.1.2h.3c.2.1.4.1.7.2.4.1.8.3 1.3.2h.1c.3 0 .6.1.9.1.4 0 .8 0 1.2.1.3 0 .6.1.9.1H44.5c.3 0 .7 0 1 .1.7.1 1.5.2 2.2.1.4-.1.7-.1 1.1-.1.3 0 .7.1 1 0 .4-.1.8 0 1.3.1h.2c.5-.1.9-.2 1.4 0 .1 0 .3 0 .3-.1.1-.1 0-.3.1-.4.2-.5.5-.8.9-1.1.1-.1.3 0 .4-.1.1 0 .2-.1.3-.2.1-.1.2-.2.2-.3.3-.3.6-.5.8-.8.3-.4.6-.7.8-1.1.4-.6.8-1.2 1.2-1.7.2-.3.3-.7.6-1 .1-.1.1-.4.2-.6.2-.5.4-1.1.6-1.6.1-.4.2-.8.4-1.1.1-.2.2-.5.3-.7.2-.5.4-.9.5-1.4.1-.5.3-1 .6-1.4.1-.1 0-.2.1-.3 0-.2 0-.4.1-.5.2-.3.3-.5.3-.8 0-.4 0-.7.1-1.1.2-.6.4-1.2.7-1.7.1-.2.1-.4.1-.7.1-.5.1-.9.1-1.4-.5-1.1-.6-1.3-.6-1.5zm-1.8 24c-.3.1-.5.2-.8.4-.1.1-.3.1-.4.2-.3.2-.5.4-.8.5-.6.2-1.1.5-1.7.7-.4.2-.9.4-1.4.4-.1 0-.1 0-.2.1-.3.1-.5.4-.8.3l-.1.1c-.3.3-.6.5-1 .6-.3.1-.6.3-.9.4-.1.1-.2.2-.3.2-.4.1-.9.2-1.4.3-.3.1-.7.2-1 .2-.4.1-.8.2-1.2.2-.7 0-1.4.1-2.2.1-.8 0-1.7-.1-2.5-.1-.4 0-.7-.1-1.1-.1-.1 0-.2-.1-.3-.2-.3.1-.6.2-.9 0-.2-.1-.5 0-.7 0-.7 0-1.5 0-2.2-.1-.6-.1-1.2-.1-1.8-.2-1-.2-2.1-.4-3.1-.6-.4-.1-.7-.2-1.1-.2-.6 0-1.1-.2-1.6-.3-.2 0-.5-.2-.7-.2-.6-.1-1.2-.4-1.7-.7-.4-.2-.9-.3-1.3-.6-.4-.2-.7-.5-1.1-.6-.4-.1-.8-.2-1.1-.4-.2-.1-.4-.2-.7-.3-.1-.1-.2-.2-.4-.2-.3-.1-.5-.3-.7-.5 0 0-.1-.1-.2-.1-.3 0-.6-.1-.9-.3-.3-.2-.7-.3-1.1-.5l-.6-.3c-.1 0-.1-.1-.2-.1-.4.1-.6-.1-1-.3-.4-.2-.9-.3-1.3-.5-.3-.1-.6-.3-1-.5-.3-.2-.7-.3-1-.5-.1-.1-.3-.1-.4-.2-.3-.2-.7-.3-1-.5-.4-.2-.9-.5-1.3-.7-.1 0-.2 0-.3-.1-.2-.1-.3-.1-.5-.2s-.3-.2-.5-.3c-.4-.2-.8-.4-1.1-.6-.2-.1-.4-.2-.5-.3 0 0-.1 0-.1-.1-.2-.3-.5-.4-.9-.5-.3-.1-.5-.3-.7-.5-.3-.3-.6-.5-1-.8l-.7-.7c-.4-.4-.7-.8-1-1.2-.2-.2-.3-.4-.4-.6-.4-.5-.7-.9-1.1-1.4-.1-.1-.3-.2-.4-.4-.1-.1-.1-.2-.2-.3-.1-.1-.1-.2-.2-.2-.5-.1-.7-.6-.9-1v-.2c-.3-.2-.3-.5-.4-.7-.3-.4-.4-.8-.5-1.3 0-.1-.1-.2-.1-.3-.1-.4-.3-.8-.4-1.2-.2-.6-.3-1.1-.4-1.7 0-.2-.1-.4-.1-.6 0-.1-.1-.3-.1-.4 0-.2-.1-.4-.1-.6 0-.9 0-1.9-.1-2.8 0-.5-.1-.9-.1-1.3 0-.3 0-.7.1-1 0-.4.1-.8.1-1.2.1-.5.2-.9.2-1.4 0-.3.1-.5.1-.8 0-.5.1-1 .3-1.5.2-.5.3-.9.2-1.4 0-.3.1-.6.2-.9.1-.5.2-1.1.4-1.6.2-.6.2-1.2.2-1.7.1-.5.1-.9.3-1.4.1-.4.4-.8.6-1.2 0-.1 0-.1.1-.2.1-.3.3-.7.4-1 .1-.3.1-.5.1-.8.1-.5.2-1 .4-1.4.1-.4.3-.7.4-1.1.1-.2.2-.4.3-.7.3-.7.9-1.3 1-2.1 0-.1.1-.1.1-.2.2-.3.4-.7.6-1l.6-.9L7.9 24c.3-.4.7-.8 1.1-1.1.2-.2.5-.4.8-.6.4-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.8.2-.1.3-.3.5-.4.4-.3.8-.6 1.1-.9.2-.1.3-.3.4-.4.4-.3.7-.6 1.1-.9.5-.3 1-.7 1.5-.9.6-.2 1-.6 1.5-.8l1.2-.6c.6-.3 1.2-.7 1.8-1.1.7-.4 1.3-.9 2.1-1 .5-.1.9-.3 1.3-.5.6-.3 1.2-.5 1.8-.8.1-.1.3-.1.4-.2.5-.2 1-.4 1.4-.6.5-.2 1-.5 1.5-.8l1.2-.6c.5-.3 1-.5 1.4-.8.2-.1.5-.3.7-.4.1.1.3.1.4 0 .4-.3.9-.5 1.4-.6.3-.1.5-.3.7-.4.5-.3 1-.5 1.5-.8.4-.2.8-.4 1.1-.7.2-.2.4-.5.6-.8.2-.3.4-.5.6-.8.2-.3.3-.5.4-.8.3-.9.4-1.8.7-2.7.1-.4.5-.7.7-1l.2-.1c.3.2.6.5.8.7.1.1 0 .4 0 .5 0 .2 0 .3.2.4.3.1.4.8.2 1.1-.3.3-.5.7-.6 1.1-.1.4 0 .9.1 1.3.2.7.8 1.2 1.3 1.7.3.4.6.8.9 1.3.2.3.5.6.7.9l2.1 2.4 1.5 1.8c.4.5 1 .9 1.4 1.4l.1.1c.2.3.5.5.7.8.3.3.5.6.8.9.1.1.1.2.2.2.6.3 1 .8 1.5 1.3.2.2.5.5.9.6.4.2.8.5 1.1.8.2.2.5.3.7.4.2.1.4.3.6.5.1.1.1.2.2.2.7.3 1.2.8 1.7 1.2.5.4.9.9 1.4 1.3.3.3.6.6 1 .9.6.5 1.2.9 1.8 1.4.2.1.3.3.4.4.4.3.7.7 1.1 1l.4.4c.4.1.5.4.8.6.5.4.9.8 1.3 1.2.3.3.6.6.9.8.4.3.9.7 1.3 1 .2.1.2.3.4.5l.7.7c.2.3.5.6.7.9.4.6.7 1.2 1.2 1.7.3.3.4.7.7 1 .2.4.5.7.7 1.1l.6.6c.1.2.2.4.3.5.3.5.7 1 .9 1.5.2.3.1.7.2 1.1.1.4.2.7.4 1.1.1.3.2.7.3 1 .1.5.3 1 .4 1.4v.2c.1.2.1.4.2.6 0 .1.1.2.1.3.1.6.3 1.1.5 1.7.3.7.5 1.4.5 2.2 0 1 .1 2.1.1 3.1s-.1 1.9-.2 2.9v.1c.2.3.1.7 0 1l-.3 1.2c-.2.6-.4 1.1-.7 1.7-.2.4-.4.7-.6 1.1-.1.2-.2.4-.3.7-.2.4-.3.8-.5 1.2-.3.5-.5.9-.8 1.3-.2.3-.4.7-.7 1-.4.6-.8 1.2-1.4 1.6-.2.1-.3.3-.5.5-.3.3-.6.7-1 1-.1.1-.2.2-.3.2-.3 0-.4.3-.6.4-.3.2-.5.5-.8.6-.3.1-.5.4-.7.5-.2.2-.5.3-.8.5-.4.4-.9.7-1.3 1.1-.2.1-.4.2-.5.3-.4.4-.8.8-1.3 1.1-.3.2-.8.4-1.2.6-.2.1-.5.2-.7.3h-.4c-.4.3-.8.6-1.3.8-.4.2-.6.4-.9.6.3.1.2.1.1.1z"
            mask="url(#b)"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#131413" />
      <path d="M45.3 71c-.5-.8-.3-.8.2-1.2.3-.2.5-.5.7-.8l.5-.5c.4-.5.7-1 1-1.5.3-.4.6-.8.8-1.2.2-.3.4-.6.5-1 .2-.5.4-.9.6-1.4l.3-.9c.1-.4.2-.9.3-1.3v-.4c0-.2.1-.3.1-.5v-.1l.3-2.1c0-.2.1-.4.2-.6v-.2c0-.3-.1-.5.2-.7v-.2-1.1-.2c.2-.3.2-.5.1-.8v-.1c.3-.7.1-1.4.2-2.1 0-.2.1-.3.2-.5 0-.2.1-.3.1-.5v-1c0-.6.1-1.2.1-1.8 0-1-.1-2-.1-3.1v-.5c0-.2-.1-.3-.1-.5l-.3-.9c0-.1 0-.2.1-.2h.4c.2.2.4.4.6.7l.1.1c0 .4.2.7.3 1.1.2.7.2 1.4.3 2 0 .4-.1.9.1 1.3.1.2-.1.4-.2.6-.1.3-.1.6 0 .9.1.3 0 .7 0 1 0 .1-.1.2-.1.3-.1.5-.2.9-.2 1.4-.1.6-.1 1.1-.1 1.7 0 .5-.1 1-.1 1.4v.5c0 .2 0 .5-.1.7v.6c0 .4 0 .7-.1 1.1 0 .2 0 .3-.1.5v.3c-.3.4-.2.9-.2 1.3-.1.6-.3 1.2-.4 1.8-.1.2-.1.5-.1.7 0 .2-.1.3-.2.4-.2.3-.4.5-.4.9 0 .2-.2.4-.2.6-.1.2-.2.5-.3.7 0 .1-.1.2-.1.2-.3.3-.6.6-.8.9-.1.1-.1.2-.1.2.1.3-.1.4-.2.6-.3.4-.6.7-1 1.1-.2.2-.5.4-.7.6-.1 0-.1.1-.1.2 0 .5-.3.7-.6.9-.1 0-.2.1-.3.2-.6.3-.8.5-1.1.4"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#131413" />
    </svg>
  );
}