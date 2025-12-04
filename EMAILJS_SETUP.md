# EmailJS Setup Instructions

To enable the contact form to send emails to your inbox, you need to set up EmailJS (free service).

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Configure the template with these **EXACT** settings:

**Template Name:** Contact Form

**⚠️ IMPORTANT - From Name Field:**
- In the EmailJS template editor, find the **"From Name"** field
- Set it to: `{{from_name}}`
- This is CRITICAL - if you leave it blank or use a static name, the sender's name won't appear!
- The field should look like this: `{{from_name}}` (with the curly braces)

**From Email:** 
- Leave this as your connected email service (don't change it)
- This is the email address that will send the message

**Reply To:** 
- Set this to: `{{from_email}}`
- This allows you to reply directly to the person who contacted you

**Subject:** 
- Set to: `New Message from Portfolio: {{subject}}`

**Content (Email Body):**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

**⚠️ CRITICAL SETTINGS CHECKLIST:**
- ✅ **From Name** = `{{from_name}}` (NOT blank, NOT a static name)
- ✅ **Reply To** = `{{from_email}}`
- ✅ **Subject** = `New Message from Portfolio: {{subject}}`
- ✅ All template variables use double curly braces: `{{variable_name}}`

4. Click **Save** and copy the **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** and copy it

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual credentials

## Step 6: Restart Development Server

After adding the `.env` file, restart your development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox (shemavainqueur123@gmail.com)
4. You should receive the message!

## Important Notes

- The `.env` file should NOT be committed to git (it's already in `.gitignore`)
- For production, add these environment variables to your hosting platform
- Free tier allows 200 emails per month
- Make sure your email service is properly connected in EmailJS

## Troubleshooting

### Sender's Name Not Appearing in Email

**Problem:** The sender's name doesn't show in your email inbox.

**Solution:**
1. Go to your EmailJS template editor
2. Check the **"From Name"** field - it MUST be set to `{{from_name}}`
3. If it's blank or has a static name, change it to `{{from_name}}`
4. Save the template
5. Test the form again

**Common Mistakes:**
- ❌ Leaving "From Name" blank
- ❌ Using a static name like "Portfolio Contact" instead of `{{from_name}}`
- ❌ Missing the curly braces: should be `{{from_name}}` not `from_name`

### Other Issues

- If emails aren't sending, check the browser console for errors
- Verify all three environment variables are set correctly in your `.env` file
- Make sure your EmailJS service is active
- Check that the template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Make sure you restarted your dev server after adding the `.env` file

