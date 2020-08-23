import React from "react"
import PropTypes from "prop-types"
import { Box, Image } from "rebass"
import avatar from "../assets/avatar.jpg"

function Avatar({ size, align }) {
  return (
    <Box textAlign={align}>
      <Image
        src={avatar}
        width={size}
        height="auto"
        sx={{ borderRadius: 9999 }}
      />
    </Box>
  )
}

Avatar.defaultProps = {
  size: "50%",
  align: "center",
}

Avatar.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  align: PropTypes.string,
}

export default Avatar
