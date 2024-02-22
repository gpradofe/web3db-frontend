import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import Spline from "@splinetool/react-spline";
import ResponsiveAppBar from "../../Organisms/NavBar";
import { Avatar, Container, Grid, styled } from "@mui/material";
const teamMembers = [
  {
    name: "Gustavo Aniceto",
    role: "Lead Developer",
    university: "University of Notre Dame",
    imgUrl: "/path-to-gustavo-image.jpg",
  },
  {
    name: "Shankha Shubhra Mukherjee",
    role: "Lead Developer",
    university: "University of Notre Dame",
    imgUrl: "/path-to-shankha-image.jpg",
  },
  {
    name: "Jake [Something I cannot Remember]",
    role: "Lead Developer",
    university: "University of Georgia",
    imgUrl: "/path-to-jake-image.jpg",
  },
];
const principalInvestigators = [
  {
    name: "Taeho Jung",
    role: "Principal Investigator",
    university: "University of Notre Dame",
    imgUrl: "/path-to-taeho-image.jpg",
  },
  {
    name: "WenZhan Song",
    role: "Principal Investigator",
    university: "University of Georgia",
    imgUrl: "/path-to-wenzhan-image.jpg",
  },
];
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  margin: "auto",
  border: `2px solid ${theme.palette.primary.light}`,
}));

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNormalRoute = () => navigate("/run-query");
  const handleMetaMaskRoute = () => {
    window.location.href = "https://metamask.web3db.org";
  };

  return (
    <Box
      sx={{
        backgroundColor: "#00020f",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <ResponsiveAppBar></ResponsiveAppBar>

      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        {!isMobile && (
          <Box sx={{ width: "100%", height: "75vh", position: "relative" }}>
            <Box
              sx={{
                width: "100%",
                height: "75vh",
                position: "relative",
              }}
            >
              <Spline scene="https://prod.spline.design/G-ZkNll36P6FOfVW/scene.splinecode" />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  pointerEvents: "none",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "60%",
                left: "15%",
                transform: "translateY(-50%)",
                color: "white",
                pointerEvents: "none",
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  left: isMobile ? "5%" : "15%",
                  transform: "translateY(-50%)",
                  maxWidth: isMobile ? "90%" : "35%",
                  zIndex: 2,
                  color: "white",
                  pointerEvents: "none",
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".5rem",
                    color: "inherit",
                  }}
                >
                  WEB3DB.ORG
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom>
                  Decentralized Zero-Trust Computing and Storage
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ my: 6 }}>
                  The fundamental vision behind Web3DB is to return data
                  ownership to the owner, enabling secure data sharing and
                  fostering AI innovation. Utilizing spark nodes and IPFS, we
                  are building a decentralized network for query processing
                  without centralized coordination, with upcoming features like
                  decentralized access control with encryption.
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleMetaMaskRoute}
                  sx={{ pointerEvents: "auto" }}
                >
                  {" "}
                  Try Demo
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        <Container
          sx={{
            color: "white",
            py: 8,
            mt: isMobile ? 0 : "5vh",
            maxWidth: "lg",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
          >
            Empowering Innovation with Web3DB
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Web3DB is redefining the landscape of digital sovereignty and data
            management through its commitment to decentralized, zero-trust
            computing and storage frameworks. At its core, Web3DB leverages
            advanced decentralized technologies to enable secure, autonomous
            data exchanges that empower individuals and organizations alike. By
            harnessing the power of blockchain, IPFS, and smart contract
            protocols, Web3DB introduces a new paradigm where data ownership and
            privacy are not just priorities but foundational principles.
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Our platform stands at the vanguard of the decentralized web
            movement, providing robust solutions for data integrity,
            verification, and distribution without reliance on centralized
            authorities. This not only enhances security and trust but also
            opens up unprecedented opportunities for innovation in AI, machine
            learning, and beyond. Through Web3DB, developers and researchers can
            access a global data marketplace, where insights and information are
            shared freely yet securely, catalyzing a new wave of technological
            advancements and applications.
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            The journey of Web3DB is marked by constant innovation, aiming to
            tackle some of the most pressing challenges in data security,
            privacy, and accessibility today. We are pioneering methods to
            streamline decentralized query processing, enhance data encryption
            protocols, and create a more resilient, efficient network for data
            storage and retrieval. Our mission is to build a future where data
            can move freely yet remain protected, empowering users worldwide to
            leverage their data in ways never before possible.
          </Typography>
          {/* Team and PI Sections with improved layout */}
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 6, mb: 3 }}>
            Meet the Innovators
          </Typography>
          <Grid container spacing={5} justifyContent="center">
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <StyledAvatar src={member.imgUrl} alt={member.name} />
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2">
                    {member.role}, {member.university}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h4" sx={{ fontWeight: 700, mt: 8, mb: 3 }}>
            Principal Investigators
          </Typography>
          <Grid container spacing={5} justifyContent="center">
            {principalInvestigators.map((pi) => (
              <Grid item xs={12} sm={6} key={pi.name}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <StyledAvatar src={pi.imgUrl} alt={pi.name} />
                  <Typography variant="h6">{pi.name}</Typography>
                  <Typography variant="body2">
                    {pi.role}, {pi.university}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* NSF Grant and University Affiliations */}
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              NSF Grant and University Affiliations
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
              The support from the National Science Foundation (NSF) has been
              instrumental in propelling Web3DB's vision from concept to
              reality. This prestigious grant underscores the innovative
              potential and societal impact of our work, facilitating research
              that pushes the boundaries of decentralized computing and data
              sovereignty.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
              With the NSF's backing, Web3DB has embarked on cutting-edge
              research initiatives in collaboration with leading academic
              institutions such as the University of Notre Dame and the
              University of Georgia. These partnerships enrich our project with
              a wide spectrum of expertise, from cybersecurity and blockchain
              technology to data analytics and AI. The collaboration fosters an
              interdisciplinary approach, crucial for addressing the complex
              challenges of today's digital landscape.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
              The NSF grant not only validates the significance of our efforts
              but also enables us to contribute to the academic and scientific
              community through shared knowledge, resources, and discoveries.
              It's a testament to our commitment to not only advancing
              technology but also to nurturing an ecosystem where open
              innovation thrives. Through this collaboration, Web3DB is setting
              new standards for data management and security, inspiring a
              generation of researchers and developers to explore the vast
              potential of decentralized technologies.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ textAlign: "center", py: 8 }}>
        <Button
          variant="contained"
          onClick={handleMetaMaskRoute}
          sx={{
            pointerEvents: "auto",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          Explore Web3DB
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
