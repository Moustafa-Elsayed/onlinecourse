import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const FAQs = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      buttonText: "Enrollment Process for Different Courses",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer:
        "You can expect various support from instructors, including Q&A sessions, forums, and one-on-one help.",
    },
    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        "Our courses are primarily self-paced, allowing you to complete them at your own pace. However, some courses may have specific schedules.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Most of our courses have no prerequisites. Check the course details for specific requirements.",
    },
    {
      question: "Can I download the course materials for offline access?",
      answer:
        "Yes, course materials are available for download so you can access them offline.",
    },
  ];

  return (
    <Container
      sx={{
        mt: 5,

        maxWidth: "550px",
        height: "100%",
        maxHeight: "auto",
        pb: 5,
      
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Still have any questions? Contact our Team via
              support@skillbridge.com
            </Typography>
            <CustomButton
              title={"See All FAQ's"}
              backgroundColor={theme.palette.primary.light}
              border={"1px solid #f5eaea"}
              fontWeight={"bold"}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{
                  mb: 4,
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: 1,
                  border: "1px solid #f5eaea",
                }}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={
                    <Box
                      sx={{
                        backgroundColor: "#FFF9F0",
                        borderRadius: 1,
                        border: "1px solid #FFEACC",
                      }}
                    >
                      {expanded === index ? <ClearIcon /> : <AddIcon />}
                    </Box>
                  }
                  aria-controls={`panel${index}a-content`}
                  id={`panel${index}a-header`}
                >
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Typography>{faq.answer}</Typography>
                    {faq.buttonText && (
                      <CustomButton
                        title={faq.buttonText}
                        backgroundColor={"#28282833"}
                        endIcon={
                          <Box
                            sx={{
                              backgroundColor: "white",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: 0.5,
                            }}
                          >
                            <ArrowForwardIcon />
                          </Box>
                        }
                        imageAlt="button image"
                        imagePosition="end"
                      />
                    )}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FAQs;
