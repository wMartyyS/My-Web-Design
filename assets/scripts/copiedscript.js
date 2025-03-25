document.addEventListener("DOMContentLoaded", function() {
  const emailIcon = document.querySelector(".icon.mail span");
  const discordIcon = document.querySelector(".icon.discord span");
  const tooltip = document.querySelector(".icon.mail .tooltip");
  const discordTooltip = document.querySelector(".icon.discord .tooltip");

  if (emailIcon && tooltip) {
    emailIcon.addEventListener("click", function() {
      const email = 'martriix.csgo@gmail.com';
      const originalTooltipText = tooltip.innerHTML;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          tooltip.innerHTML = "Copied!";
          setTimeout(() => {
            tooltip.innerHTML = originalTooltipText;
          }, 1000);
        }).catch(err => {
          console.error("Failed to copy email: ", err);
        });
      } else {
        const copyTextArea = document.createElement("textarea");
        copyTextArea.value = email;
        document.body.appendChild(copyTextArea);
        copyTextArea.select();
        try {
          document.execCommand('copy');
          tooltip.innerHTML = "Copied!";
          setTimeout(() => {
            tooltip.innerHTML = originalTooltipText;
          }, 1000);
        } catch (err) {
          console.error("Failed to copy email: ", err);
        }
        document.body.removeChild(copyTextArea);
      }
    });
  } else {
    console.error("Email icon or tooltip not found");
  }

  if (discordIcon && discordTooltip) {
    discordIcon.addEventListener("click", function() {
      const discordTag = 'martyys';
      const originalTooltipText = discordTooltip.innerHTML;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(discordTag).then(() => {
          discordTooltip.innerHTML = "Copied!";
          setTimeout(() => {
            discordTooltip.innerHTML = originalTooltipText;
          }, 1000);
        }).catch(err => {
          console.error("Failed to copy Discord tag: ", err);
        });
      } else {
        const copyTextArea = document.createElement("textarea");
        copyTextArea.value = discordTag;
        document.body.appendChild(copyTextArea);
        copyTextArea.select();
        try {
          document.execCommand('copy');
          discordTooltip.innerHTML = "Copied!";
          setTimeout(() => {
            discordTooltip.innerHTML = originalTooltipText;
          }, 1000);
        } catch (err) {
          console.error("Failed to copy Discord tag: ", err);
        }
        document.body.removeChild(copyTextArea);
      }
    });
  } else {
    console.error("Discord icon or tooltip not found");
  }
});