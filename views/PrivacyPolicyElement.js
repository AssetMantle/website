import { Container, Typography } from "@mui/material";
import React from "react";
import NextLink from "../components/NextLink";

export default function PrivacyPolicyElement() {
  const date = "Effective Date: August 19, 2024";

  const Policies = [
    {
      title: "Introduction",
      content: [
        {
          type: "p",
          content:
            "Welcome to assetmantle.one. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website.",
        },
      ],
    },
    {
      title: "Information We Collect",
      content: [
        {
          type: "p",
          content:
            "We collect personal information that you provide directly to us, such as your name, email address, and any other details you choose to share. We may also collect information about your usage of our website through cookies and other tracking technologies.",
        },
      ],
    },

    {
      title: "How We Use Your Information",
      content: [
        {
          type: "p",
          content: "We use your information to:",
        },
        {
          type: "ul",
          content: [
            "Improve and personalize your experience on our website",
            "Communicate with you about updates, promotions, and other relevant information",
            "Analyze website usage to enhance functionality and performance",
          ],
        },
      ],
    },

    {
      title: "Data Sharing and Disclosure",
      content: [
        {
          type: "p",
          content:
            "We do not sell or rent your personal information to third parties. We may share your data with service providers who assist us in operating our website and conducting our business, provided they agree to keep the information confidential. We may also disclose your information if required by law or to protect our rights.",
        },
      ],
    },

    {
      title: "Data Security",
      content: [
        {
          type: "p",
          content:
            "We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.",
        },
      ],
    },

    {
      title: "Your Choices",
      content: [
        {
          type: "p",
          content:
            "You may opt out of receiving promotional communications from us by following the unsubscribe instructions in those emails. You can also manage your cookie preferences through your browser settings.",
        },
      ],
    },

    {
      title: "Changes to This Policy",
      content: [
        {
          type: "p",
          content:
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
        },
      ],
    },

    {
      title: "Contact Us",
      content: [
        {
          type: "single-p",
          content: [
            {
              content:
                "If you have any questions or concerns about this Privacy Policy, please contact us at ",
            },
            {
              type: "a",
              href: "mailto:hello@assetmantle.one",
              content: "hello@assetmantle.one",
            },
          ],
        },
      ],
    },
  ];
  return (
    <main>
      <Container maxWidth="lg" sx={{ pb: 14 }}>
        <Typography variant="h3" component={`h1`}>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1, mb: 4 }}>
          {date}
        </Typography>

        {React.Children.toArray(
          Policies.map((pol) => (
            <>
              <Typography component={`h2`} variant="h5" sx={{ my: 2 }}>
                {pol?.title}
              </Typography>
              {pol?.content &&
                React.Children.toArray(
                  pol?.content?.map((inner) =>
                    inner?.type === "ul" ? (
                      <ul>
                        {React.Children.toArray(
                          inner?.content?.map((li) => <li>{li}</li>)
                        )}
                      </ul>
                    ) : inner?.type === "single-p" ? (
                      <Typography>
                        {React.Children.toArray(
                          inner?.content?.map((span) =>
                            span?.type === "a" ? (
                              <NextLink
                                color="primary.main"
                                underline="hover"
                                href={span?.href}
                              >
                                {span?.content}
                              </NextLink>
                            ) : (
                              <span>{span?.content}</span>
                            )
                          )
                        )}
                      </Typography>
                    ) : (
                      <Typography>{inner?.content}</Typography>
                    )
                  )
                )}
            </>
          ))
        )}
      </Container>
    </main>
  );
}
