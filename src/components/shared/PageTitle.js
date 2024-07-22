import { Box, Typography } from '@mui/material'
import React from 'react'

const PageTitle = ({title,subTitle}) => {
  return (
    <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "start", sm: "start", md: "center" },
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{ maxWidth: "600px", mb: 2 }}>
          {subTitle}
        </Typography>
      </Box>
  )
}

export default PageTitle