// Import necessary Material-UI components
import React from 'react';
import { Card, CardContent, Typography, Box, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { PricingPlan } from '@/lib/dummyData/pricing/Pricingplan';
import theme from '@/styles/theme';
import CustomButton from '../shared/CustomButton';

const features = PricingPlan

const CustomCard = ({Plan,price}) => {
  return (
    <Card sx={{ maxWidth: 550, borderRadius: 2,backgroundColor:theme.palette.primary.light }} elevation={0}>
      <CardContent sx={{p:2}}>
        <Box textAlign="center" mb={2}>
          <Typography variant="subtitle1" color="text.secondary" sx={{border:"1px solid #FFEACC",p:0.5,borderRadius:1,backgroundColor:"# FFF9F0"}}>
            {Plan} Plan
          </Typography>
          <Typography variant="h3" color="text.primary" sx={{ my: 1 }}>
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            /month
          </Typography>
        </Box>
        <Box textAlign="center" mb={2}>
          <Typography variant="subtitle1" color="text.primary">
            Available Features
          </Typography>
        </Box>
        <List sx={{backgroundColor:"white",borderRadius:2,p:1}}>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {feature.available ? (
                  <CheckCircleIcon color="success" />
                ) : (
                  <CancelIcon color="error" />
                )}
              </ListItemIcon>
              <ListItemText primary={feature.text} />
            </ListItem>
          ))}
        <Box textAlign="center" >
          <CustomButton title={"Get Started"}  backgroundColor={theme.palette.secondary.main} width={"100%"}/>
        </Box>
        </List>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
