<template>
  <span/>
</template>
<script>
export default {
  name: 'club-sprites',
};
</script>
<style lang="scss">
.club-emblem {
  display: flex;
  justify-content: center;
}
@mixin club($s, $f: "../assets/club-sprite.png") {
  width: $s;
  height: $s;
  align-self: center;
  margin: auto auto;
  background-image: url($f);
}
.bg-club-001 {
  @include club(75px);
  background-position: -0 -0;
}
.bg-club-002 {
  @include club(48px);
  background-position: -1275px -1014px;
}
.bg-club-003 {
  @include club(75px);
  background-position: -0 -75px;
}
.bg-club-004 {
  @include club(48px);
  background-position: -336px -1515px;
}
.bg-club-005 {
  @include club(75px);
  background-position: -150px -0;
}
.bg-club-006 {
  @include club(48px);
  background-position: -240px -1515px;
}
.bg-club-007 {
  @include club(75px);
  background-position: -0 -150px;
}
.bg-club-008 {
  @include club(48px);
  background-position: -144px -1515px;
}
.bg-club-009 {
  @include club(75px);
  background-position: -150px -150px;
}
.bg-club-022 {
  @include club(48px);
  background-position: -48px -1515px;
}
.bg-club-023 {
  @include club(75px);
  background-position: -225px -75px;
}
.bg-club-024 {
  @include club(48px);
  background-position: -1542px -1440px;
}
.bg-club-025 {
  @include club(75px);
  background-position: -0 -225px;
}
.bg-club-026 {
  @include club(48px);
  background-position: -1542px -1056px;
}
.bg-club-027 {
  @include club(75px);
  background-position: -150px -225px;
}
.bg-club-028 {
  @include club(48px);
  background-position: -1542px -864px;
}
.bg-club-029 {
  @include club(75px);
  background-position: -300px -0;
}
.bg-club-030 {
  @include club(48px);
  background-position: -1542px -768px;
}
.bg-club-031 {
  @include club(75px);
  background-position: -300px -150px;
}
.bg-club-032 {
  @include club(48px);
  background-position: -1542px -672px;
}
.bg-club-033 {
  @include club(75px);
  background-position: -0 -300px;
}
.bg-club-034 {
  @include club(48px);
  background-position: -1542px -576px;
}
.bg-club-035 {
  @include club(75px);
  background-position: -150px -300px;
}
.bg-club-036 {
  @include club(48px);
  background-position: -1542px -480px;
}
.bg-club-037 {
  @include club(75px);
  background-position: -300px -300px;
}
.bg-club-038 {
  @include club(48px);
  background-position: -1542px -384px;
}
.bg-club-039 {
  @include club(75px);
  background-position: -375px -75px;
}
.bg-club-040 {
  @include club(48px);
  background-position: -1542px -288px;
}
.bg-club-041 {
  @include club(75px);
  background-position: -375px -225px;
}
.bg-club-042 {
  @include club(48px);
  background-position: -1542px -192px;
}
.bg-club-043 {
  @include club(75px);
  background-position: -0 -375px;
}
.bg-club-044 {
  @include club(48px);
  background-position: -1542px -96px;
}
.bg-club-045 {
  @include club(75px);
  background-position: -150px -375px;
}
.bg-club-046 {
  @include club(48px);
  background-position: -1542px -0;
}
.bg-club-047 {
  @include club(75px);
  background-position: -300px -375px;
}
.bg-club-048 {
  @include club(48px);
  background-position: -1440px -1467px;
}
.bg-club-049 {
  @include club(75px);
  background-position: -450px -0;
}
.bg-club-050 {
  @include club(48px);
  background-position: -1344px -1467px;
}
.bg-club-051 {
  @include club(75px);
  background-position: -450px -150px;
}
.bg-club-052 {
  @include club(48px);
  background-position: -1248px -1467px;
}
.bg-club-053 {
  @include club(75px);
  background-position: -450px -300px;
}
.bg-club-054 {
  @include club(48px);
  background-position: -1152px -1467px;
}
.bg-club-055 {
  @include club(75px);
  background-position: -0 -450px;
}
.bg-club-056 {
  @include club(48px);
  background-position: -1056px -1467px;
}
.bg-club-057 {
  @include club(75px);
  background-position: -150px -450px;
}
.bg-club-058 {
  @include club(48px);
  background-position: -960px -1467px;
}
.bg-club-059 {
  @include club(75px);
  background-position: -300px -450px;
}
.bg-club-060 {
  @include club(48px);
  background-position: -864px -1467px;
}
.bg-club-061 {
  @include club(75px);
  background-position: -450px -450px;
}
.bg-club-062 {
  @include club(48px);
  background-position: -768px -1467px;
}
.bg-club-063 {
  @include club(75px);
  background-position: -525px -75px;
}
.bg-club-064 {
  @include club(48px);
  background-position: -672px -1467px;
}
.bg-club-065 {
  @include club(75px);
  background-position: -525px -225px;
}
.bg-club-066 {
  @include club(48px);
  background-position: -576px -1467px;
}
.bg-club-067 {
  @include club(75px);
  background-position: -525px -375px;
}
.bg-club-068 {
  @include club(48px);
  background-position: -480px -1467px;
}
.bg-club-069 {
  @include club(75px);
  background-position: -0 -525px;
}
.bg-club-070 {
  @include club(48px);
  background-position: -384px -1467px;
}
.bg-club-071 {
  @include club(75px);
  background-position: -150px -525px;
}
.bg-club-072 {
  @include club(48px);
  background-position: -288px -1467px;
}
.bg-club-073 {
  @include club(75px);
  background-position: -300px -525px;
}
.bg-club-074 {
  @include club(48px);
  background-position: -192px -1467px;
}
.bg-club-075 {
  @include club(75px);
  background-position: -450px -525px;
}
.bg-club-076 {
  @include club(48px);
  background-position: -96px -1467px;
}
.bg-club-077 {
  @include club(75px);
  background-position: -600px -0;
}
.bg-club-078 {
  @include club(48px);
  background-position: -0 -1467px;
}
.bg-club-079 {
  @include club(75px);
  background-position: -600px -150px;
}
.bg-club-080 {
  @include club(48px);
  background-position: -1494px -1344px;
}
.bg-club-081 {
  @include club(75px);
  background-position: -600px -300px;
}
.bg-club-082 {
  @include club(48px);
  background-position: -1494px -1248px;
}
.bg-club-083 {
  @include club(75px);
  background-position: -600px -450px;
}
.bg-club-084 {
  @include club(48px);
  background-position: -1494px -1152px;
}
.bg-club-085 {
  @include club(75px);
  background-position: -0 -600px;
}
.bg-club-086 {
  @include club(48px);
  background-position: -1494px -1056px;
}
.bg-club-087 {
  @include club(75px);
  background-position: -150px -600px;
}
.bg-club-088 {
  @include club(48px);
  background-position: -1494px -960px;
}
.bg-club-089 {
  @include club(75px);
  background-position: -300px -600px;
}
.bg-club-090 {
  @include club(48px);
  background-position: -1494px -864px;
}
.bg-club-091 {
  @include club(75px);
  background-position: -450px -600px;
}
.bg-club-092 {
  @include club(48px);
  background-position: -1494px -768px;
}
.bg-club-093 {
  @include club(75px);
  background-position: -600px -600px;
}
.bg-club-094 {
  @include club(48px);
  background-position: -1494px -672px;
}
.bg-club-095 {
  @include club(75px);
  background-position: -675px -75px;
}
.bg-club-096 {
  @include club(48px);
  background-position: -1494px -576px;
}
.bg-club-097 {
  @include club(75px);
  background-position: -675px -225px;
}
.bg-club-098 {
  @include club(48px);
  background-position: -1494px -480px;
}
.bg-club-099 {
  @include club(75px);
  background-position: -675px -375px;
}
.bg-club-100 {
  @include club(48px);
  background-position: -1494px -384px;
}
.bg-club-101 {
  @include club(75px);
  background-position: -675px -525px;
}
.bg-club-102 {
  @include club(48px);
  background-position: -1494px -288px;
}
.bg-club-103 {
  @include club(75px);
  background-position: -0 -675px;
}
.bg-club-104 {
  @include club(48px);
  background-position: -1494px -192px;
}
.bg-club-105 {
  @include club(75px);
  background-position: -150px -675px;
}
.bg-club-106 {
  @include club(48px);
  background-position: -1494px -96px;
}
.bg-club-107 {
  @include club(75px);
  background-position: -300px -675px;
}
.bg-club-108 {
  @include club(48px);
  background-position: -1494px -0;
}
.bg-club-109 {
  @include club(75px);
  background-position: -450px -675px;
}
.bg-club-110 {
  @include club(48px);
  background-position: -1392px -1419px;
}
.bg-club-111 {
  @include club(75px);
  background-position: -600px -675px;
}
.bg-club-112 {
  @include club(48px);
  background-position: -1296px -1419px;
}
.bg-club-113 {
  @include club(75px);
  background-position: -750px -0;
}
.bg-club-114 {
  @include club(48px);
  background-position: -1200px -1419px;
}
.bg-club-115 {
  @include club(75px);
  background-position: -750px -150px;
}
.bg-club-116 {
  @include club(48px);
  background-position: -1104px -1419px;
}
.bg-club-117 {
  @include club(75px);
  background-position: -750px -300px;
}
.bg-club-118 {
  @include club(48px);
  background-position: -1008px -1419px;
}
.bg-club-119 {
  @include club(75px);
  background-position: -750px -450px;
}
.bg-club-120 {
  @include club(48px);
  background-position: -912px -1419px;
}
.bg-club-121 {
  @include club(75px);
  background-position: -750px -600px;
}
.bg-club-122 {
  @include club(48px);
  background-position: -816px -1419px;
}
.bg-club-123 {
  @include club(75px);
  background-position: -0 -750px;
}
.bg-club-124 {
  @include club(48px);
  background-position: -720px -1419px;
}
.bg-club-125 {
  @include club(75px);
  background-position: -150px -750px;
}
.bg-club-126 {
  @include club(48px);
  background-position: -480px -1419px;
}
.bg-club-127 {
  @include club(75px);
  background-position: -300px -750px;
}
.bg-club-128 {
  @include club(48px);
  background-position: -336px -1419px;
}
.bg-club-129 {
  @include club(75px);
  background-position: -450px -750px;
}
.bg-club-130 {
  @include club(48px);
  background-position: -240px -1419px;
}
.bg-club-131 {
  @include club(75px);
  background-position: -600px -750px;
}
.bg-club-132 {
  @include club(48px);
  background-position: -144px -1419px;
}
.bg-club-133 {
  @include club(75px);
  background-position: -750px -750px;
}
.bg-club-134 {
  @include club(48px);
  background-position: -1446px -1344px;
}
.bg-club-135 {
  @include club(75px);
  background-position: -825px -75px;
}
.bg-club-136 {
  @include club(48px);
  background-position: -1446px -1200px;
}
.bg-club-137 {
  @include club(75px);
  background-position: -825px -225px;
}
.bg-club-138 {
  @include club(48px);
  background-position: -1446px -1104px;
}
.bg-club-139 {
  @include club(75px);
  background-position: -825px -375px;
}
.bg-club-140 {
  @include club(48px);
  background-position: -1446px -1008px;
}
.bg-club-141 {
  @include club(75px);
  background-position: -825px -525px;
}
.bg-club-142 {
  @include club(48px);
  background-position: -1446px -912px;
}
.bg-club-143 {
  @include club(75px);
  background-position: -825px -675px;
}
.bg-club-144 {
  @include club(48px);
  background-position: -1446px -816px;
}
.bg-club-145 {
  @include club(75px);
  background-position: -0 -825px;
}
.bg-club-146 {
  @include club(48px);
  background-position: -1446px -672px;
}
.bg-club-147 {
  @include club(75px);
  background-position: -150px -825px;
}
.bg-club-148 {
  @include club(48px);
  background-position: -1446px -576px;
}
.bg-club-149 {
  @include club(75px);
  background-position: -300px -825px;
}
.bg-club-150 {
  @include club(48px);
  background-position: -1446px -432px;
}
.bg-club-151 {
  @include club(75px);
  background-position: -450px -825px;
}
.bg-club-152 {
  @include club(48px);
  background-position: -1446px -288px;
}
.bg-club-153 {
  @include club(75px);
  background-position: -600px -825px;
}
.bg-club-154 {
  @include club(48px);
  background-position: -1446px -192px;
}
.bg-club-155 {
  @include club(75px);
  background-position: -750px -825px;
}
.bg-club-156 {
  @include club(48px);
  background-position: -1446px -96px;
}
.bg-club-157 {
  @include club(75px);
  background-position: -900px -0;
}
.bg-club-158 {
  @include club(48px);
  background-position: -1275px -150px;
}
.bg-club-159 {
  @include club(75px);
  background-position: -900px -150px;
}
.bg-club-160 {
  @include club(48px);
  background-position: -1296px -1371px;
}
.bg-club-162 {
  @include club(48px);
  background-position: -1200px -1371px;
}
.bg-club-163 {
  @include club(75px);
  background-position: -900px -450px;
}
.bg-club-164 {
  @include club(48px);
  background-position: -1056px -1371px;
}
.bg-club-165 {
  @include club(48px);
  background-position: -960px -1371px;
}
.bg-club-166 {
  @include club(48px);
  background-position: -864px -1371px;
}
.bg-club-168 {
  @include club(48px);
  background-position: -768px -1371px;
}
.bg-club-169 {
  @include club(48px);
  background-position: -672px -1371px;
}
.bg-club-171 {
  @include club(48px);
  background-position: -576px -1371px;
}
.bg-club-173 {
  @include club(48px);
  background-position: -480px -1371px;
}
.bg-club-175 {
  @include club(48px);
  background-position: -288px -1371px;
}
.bg-club-176 {
  @include club(48px);
  background-position: -192px -1371px;
}
.bg-club-178 {
  @include club(48px);
  background-position: -96px -1371px;
}
.bg-club-179 {
  @include club(48px);
  background-position: -0 -1371px;
}
.bg-club-180 {
  @include club(48px);
  background-position: -1398px -1248px;
}
.bg-club-182 {
  @include club(48px);
  background-position: -1398px -1152px;
}
.bg-club-183 {
  @include club(75px);
  background-position: -975px -75px;
}
.bg-club-184 {
  @include club(48px);
  background-position: -1398px -1056px;
}
.bg-club-186 {
  @include club(48px);
  background-position: -1398px -960px;
}
.bg-club-187 {
  @include club(75px);
  background-position: -975px -375px;
}
.bg-club-188 {
  @include club(48px);
  background-position: -1398px -864px;
}
.bg-club-189 {
  @include club(75px);
  background-position: -975px -525px;
}
.bg-club-190 {
  @include club(48px);
  background-position: -1398px -768px;
}
.bg-club-191 {
  @include club(75px);
  background-position: -975px -675px;
}
.bg-club-192 {
  @include club(48px);
  background-position: -1398px -672px;
}
.bg-club-193 {
  @include club(75px);
  background-position: -975px -825px;
}
.bg-club-194 {
  @include club(48px);
  background-position: -1398px -576px;
}
.bg-club-195 {
  @include club(75px);
  background-position: -0 -975px;
}
.bg-club-196 {
  @include club(48px);
  background-position: -1398px -480px;
}
.bg-club-197 {
  @include club(75px);
  background-position: -150px -975px;
}
.bg-club-198 {
  @include club(48px);
  background-position: -1398px -384px;
}
.bg-club-199 {
  @include club(75px);
  background-position: -300px -975px;
}
.bg-club-200 {
  @include club(48px);
  background-position: -1398px -288px;
}
.bg-club-201 {
  @include club(75px);
  background-position: -450px -975px;
}
.bg-club-202 {
  @include club(48px);
  background-position: -1398px -192px;
}
.bg-club-203 {
  @include club(75px);
  background-position: -600px -975px;
}
.bg-club-204 {
  @include club(48px);
  background-position: -1398px -96px;
}
.bg-club-205 {
  @include club(75px);
  background-position: -750px -975px;
}
.bg-club-206 {
  @include club(48px);
  background-position: -1398px -0;
}
.bg-club-207 {
  @include club(75px);
  background-position: -900px -975px;
}
.bg-club-208 {
  @include club(48px);
  background-position: -1296px -1323px;
}
.bg-club-209 {
  @include club(75px);
  background-position: -1050px -0;
}
.bg-club-210 {
  @include club(48px);
  background-position: -1200px -1323px;
}
.bg-club-211 {
  @include club(75px);
  background-position: -1050px -150px;
}
.bg-club-212 {
  @include club(48px);
  background-position: -1104px -1323px;
}
.bg-club-213 {
  @include club(75px);
  background-position: -1050px -300px;
}
.bg-club-214 {
  @include club(48px);
  background-position: -1008px -1323px;
}
.bg-club-215 {
  @include club(75px);
  background-position: -1050px -450px;
}
.bg-club-216 {
  @include club(48px);
  background-position: -912px -1323px;
}
.bg-club-217 {
  @include club(75px);
  background-position: -1050px -600px;
}
.bg-club-218 {
  @include club(48px);
  background-position: -816px -1323px;
}
.bg-club-219 {
  @include club(75px);
  background-position: -1050px -750px;
}
.bg-club-220 {
  @include club(48px);
  background-position: -720px -1323px;
}
.bg-club-221 {
  @include club(75px);
  background-position: -1050px -900px;
}
.bg-club-222 {
  @include club(48px);
  background-position: -624px -1323px;
}
.bg-club-223 {
  @include club(75px);
  background-position: -0 -1050px;
}
.bg-club-224 {
  @include club(48px);
  background-position: -528px -1323px;
}
.bg-club-225 {
  @include club(75px);
  background-position: -150px -1050px;
}
.bg-club-226 {
  @include club(48px);
  background-position: -432px -1323px;
}
.bg-club-227 {
  @include club(75px);
  background-position: -300px -1050px;
}
.bg-club-228 {
  @include club(48px);
  background-position: -336px -1323px;
}
.bg-club-229 {
  @include club(75px);
  background-position: -450px -1050px;
}
.bg-club-230 {
  @include club(48px);
  background-position: -240px -1323px;
}
.bg-club-231 {
  @include club(75px);
  background-position: -600px -1050px;
}
.bg-club-232 {
  @include club(48px);
  background-position: -144px -1323px;
}
.bg-club-233 {
  @include club(75px);
  background-position: -750px -1050px;
}
.bg-club-234 {
  @include club(48px);
  background-position: -48px -1323px;
}
.bg-club-235 {
  @include club(75px);
  background-position: -900px -1050px;
}
.bg-club-236 {
  @include club(48px);
  background-position: -1350px -1248px;
}
.bg-club-237 {
  @include club(75px);
  background-position: -1050px -1050px;
}
.bg-club-238 {
  @include club(48px);
  background-position: -1350px -1152px;
}
.bg-club-239 {
  @include club(75px);
  background-position: -1125px -75px;
}
.bg-club-240 {
  @include club(48px);
  background-position: -1350px -1056px;
}
.bg-club-241 {
  @include club(75px);
  background-position: -1125px -225px;
}
.bg-club-242 {
  @include club(48px);
  background-position: -1350px -960px;
}
.bg-club-243 {
  @include club(75px);
  background-position: -1125px -375px;
}
.bg-club-244 {
  @include club(48px);
  background-position: -1350px -864px;
}
.bg-club-245 {
  @include club(75px);
  background-position: -1125px -525px;
}
.bg-club-246 {
  @include club(48px);
  background-position: -1350px -768px;
}
.bg-club-247 {
  @include club(75px);
  background-position: -1125px -675px;
}
.bg-club-248 {
  @include club(48px);
  background-position: -1350px -672px;
}
.bg-club-249 {
  @include club(75px);
  background-position: -1125px -825px;
}
.bg-club-250 {
  @include club(48px);
  background-position: -1350px -576px;
}
.bg-club-251 {
  @include club(75px);
  background-position: -1125px -975px;
}
.bg-club-252 {
  @include club(48px);
  background-position: -1350px -480px;
}
.bg-club-253 {
  @include club(75px);
  background-position: -0 -1125px;
}
.bg-club-254 {
  @include club(48px);
  background-position: -1350px -384px;
}
.bg-club-255 {
  @include club(75px);
  background-position: -150px -1125px;
}
.bg-club-256 {
  @include club(48px);
  background-position: -1350px -288px;
}
.bg-club-257 {
  @include club(75px);
  background-position: -300px -1125px;
}
.bg-club-258 {
  @include club(48px);
  background-position: -1350px -192px;
}
.bg-club-259 {
  @include club(75px);
  background-position: -450px -1125px;
}
.bg-club-260 {
  @include club(48px);
  background-position: -1350px -96px;
}
.bg-club-261 {
  @include club(75px);
  background-position: -600px -1125px;
}
.bg-club-262 {
  @include club(48px);
  background-position: -1350px -0;
}
.bg-club-263 {
  @include club(75px);
  background-position: -750px -1125px;
}
.bg-club-264 {
  @include club(48px);
  background-position: -1248px -1275px;
}
.bg-club-265 {
  @include club(75px);
  background-position: -900px -1125px;
}
.bg-club-266 {
  @include club(48px);
  background-position: -1152px -1275px;
}
.bg-club-267 {
  @include club(75px);
  background-position: -1050px -1125px;
}
.bg-club-268 {
  @include club(48px);
  background-position: -1056px -1275px;
}
.bg-club-269 {
  @include club(75px);
  background-position: -1200px -0;
}
.bg-club-270 {
  @include club(48px);
  background-position: -960px -1275px;
}
.bg-club-271 {
  @include club(75px);
  background-position: -1200px -150px;
}
.bg-club-272 {
  @include club(48px);
  background-position: -864px -1275px;
}
.bg-club-273 {
  @include club(75px);
  background-position: -1200px -300px;
}
.bg-club-274 {
  @include club(48px);
  background-position: -768px -1275px;
}
.bg-club-275 {
  @include club(75px);
  background-position: -1200px -450px;
}
.bg-club-276 {
  @include club(48px);
  background-position: -624px -1275px;
}
.bg-club-277 {
  @include club(75px);
  background-position: -1200px -600px;
}
.bg-club-278 {
  @include club(48px);
  background-position: -528px -1275px;
}
.bg-club-279 {
  @include club(75px);
  background-position: -1200px -750px;
}
.bg-club-280 {
  @include club(48px);
  background-position: -384px -1275px;
}
.bg-club-281 {
  @include club(75px);
  background-position: -1200px -900px;
}
.bg-club-282 {
  @include club(48px);
  background-position: -288px -1275px;
}
.bg-club-283 {
  @include club(75px);
  background-position: -1200px -1050px;
}
.bg-club-284 {
  @include club(48px);
  background-position: -144px -1275px;
}
.bg-club-285 {
  @include club(75px);
  background-position: -0 -1200px;
}
.bg-club-286 {
  @include club(48px);
  background-position: -1275px -1206px;
}
.bg-club-287 {
  @include club(75px);
  background-position: -150px -1200px;
}
.bg-club-288 {
  @include club(48px);
  background-position: -1275px -1110px;
}
.bg-club-289 {
  @include club(75px);
  background-position: -300px -1200px;
}
.bg-club-290 {
  @include club(48px);
  background-position: -1275px -870px;
}
.bg-club-291 {
  @include club(75px);
  background-position: -450px -1200px;
}
.bg-club-292 {
  @include club(48px);
  background-position: -1275px -774px;
}
.bg-club-293 {
  @include club(75px);
  background-position: -600px -1200px;
}
.bg-club-294 {
  @include club(48px);
  background-position: -1275px -630px;
}
.bg-club-295 {
  @include club(75px);
  background-position: -750px -1200px;
}
.bg-club-296 {
  @include club(48px);
  background-position: -1275px -486px;
}
.bg-club-297 {
  @include club(75px);
  background-position: -900px -1200px;
}
.bg-club-298 {
  @include club(48px);
  background-position: -1275px -390px;
}
.bg-club-299 {
  @include club(75px);
  background-position: -1050px -1200px;
}
.bg-club-300 {
  @include club(48px);
  background-position: -1275px -294px;
}
.bg-club-301 {
  @include club(75px);
  background-position: -1200px -1200px;
}
.bg-club-302 {
  @include club(48px);
  background-position: -1392px -1371px;
}
.bg-club-303 {
  @include club(75px);
  background-position: -1275px -75px;
}
.bg-club-304 {
  @include club(48px);
  background-position: -1275px -198px;
}
.bg-club-305 {
  @include club(75px);
  background-position: -1275px -0;
}
.bg-club-306 {
  @include club(48px);
  background-position: -1275px -246px;
}
.bg-club-307 {
  @include club(75px);
  background-position: -1125px -1200px;
}
.bg-club-308 {
  @include club(48px);
  background-position: -1275px -342px;
}
.bg-club-309 {
  @include club(75px);
  background-position: -975px -1200px;
}
.bg-club-310 {
  @include club(48px);
  background-position: -1275px -438px;
}
.bg-club-311 {
  @include club(75px);
  background-position: -825px -1200px;
}
.bg-club-312 {
  @include club(48px);
  background-position: -1275px -534px;
}
.bg-club-313 {
  @include club(48px);
  background-position: -1275px -582px;
}
.bg-club-315 {
  @include club(48px);
  background-position: -1275px -678px;
}
.bg-club-316 {
  @include club(48px);
  background-position: -1275px -726px;
}
.bg-club-318 {
  @include club(48px);
  background-position: -1275px -822px;
}
.bg-club-319 {
  @include club(75px);
  background-position: -375px -1200px;
}
.bg-club-320 {
  @include club(48px);
  background-position: -1275px -918px;
}
.bg-club-321 {
  @include club(48px);
  background-position: -1275px -966px;
}
.bg-club-322 {
  @include club(48px);
  background-position: -432px -1515px;
}
.bg-club-323 {
  @include club(48px);
  background-position: -1275px -1062px;
}
.bg-club-324 {
  @include club(75px);
  background-position: -225px -1200px;
}
.bg-club-325 {
  @include club(48px);
  background-position: -1275px -1158px;
}
.bg-club-326 {
  @include club(75px);
  background-position: -75px -1200px;
}
.bg-club-327 {
  @include club(48px);
  background-position: -0 -1275px;
}
.bg-club-328 {
  @include club(48px);
  background-position: -48px -1275px;
}
.bg-club-329 {
  @include club(48px);
  background-position: -96px -1275px;
}
.bg-club-330 {
  @include club(75px);
  background-position: -1200px -1125px;
}
.bg-club-331 {
  @include club(48px);
  background-position: -192px -1275px;
}
.bg-club-332 {
  @include club(48px);
  background-position: -240px -1275px;
}
.bg-club-333 {
  @include club(75px);
  background-position: -1200px -975px;
}
.bg-club-334 {
  @include club(48px);
  background-position: -336px -1275px;
}
.bg-club-335 {
  @include club(75px);
  background-position: -1200px -825px;
}
.bg-club-336 {
  @include club(48px);
  background-position: -432px -1275px;
}
.bg-club-337 {
  @include club(48px);
  background-position: -480px -1275px;
}
.bg-club-338 {
  @include club(75px);
  background-position: -1200px -675px;
}
.bg-club-339 {
  @include club(48px);
  background-position: -576px -1275px;
}
.bg-club-340 {
  @include club(75px);
  background-position: -1200px -525px;
}
.bg-club-341 {
  @include club(48px);
  background-position: -672px -1275px;
}
.bg-club-342 {
  @include club(48px);
  background-position: -720px -1275px;
}
.bg-club-343 {
  @include club(75px);
  background-position: -1200px -375px;
}
.bg-club-344 {
  @include club(48px);
  background-position: -816px -1275px;
}
.bg-club-345 {
  @include club(75px);
  background-position: -1200px -225px;
}
.bg-club-346 {
  @include club(48px);
  background-position: -912px -1275px;
}
.bg-club-347 {
  @include club(75px);
  background-position: -1200px -75px;
}
.bg-club-348 {
  @include club(48px);
  background-position: -1008px -1275px;
}
.bg-club-349 {
  @include club(75px);
  background-position: -1125px -1125px;
}
.bg-club-350 {
  @include club(48px);
  background-position: -1104px -1275px;
}
.bg-club-352 {
  @include club(48px);
  background-position: -1200px -1275px;
}
.bg-club-353 {
  @include club(75px);
  background-position: -825px -1125px;
}
.bg-club-354 {
  @include club(48px);
  background-position: -1296px -1275px;
}
.bg-club-355 {
  @include club(75px);
  background-position: -675px -1125px;
}
.bg-club-356 {
  @include club(48px);
  background-position: -1350px -48px;
}
.bg-club-357 {
  @include club(75px);
  background-position: -525px -1125px;
}
.bg-club-358 {
  @include club(48px);
  background-position: -1350px -144px;
}
.bg-club-359 {
  @include club(75px);
  background-position: -375px -1125px;
}
.bg-club-360 {
  @include club(48px);
  background-position: -1350px -240px;
}
.bg-club-361 {
  @include club(75px);
  background-position: -225px -1125px;
}
.bg-club-362 {
  @include club(48px);
  background-position: -1350px -336px;
}
.bg-club-363 {
  @include club(75px);
  background-position: -75px -1125px;
}
.bg-club-364 {
  @include club(48px);
  background-position: -1350px -432px;
}
.bg-club-365 {
  @include club(75px);
  background-position: -1125px -1050px;
}
.bg-club-366 {
  @include club(48px);
  background-position: -1350px -528px;
}
.bg-club-367 {
  @include club(75px);
  background-position: -1125px -900px;
}
.bg-club-368 {
  @include club(48px);
  background-position: -1350px -624px;
}
.bg-club-369 {
  @include club(75px);
  background-position: -1125px -750px;
}
.bg-club-370 {
  @include club(48px);
  background-position: -1350px -720px;
}
.bg-club-371 {
  @include club(75px);
  background-position: -1125px -600px;
}
.bg-club-372 {
  @include club(48px);
  background-position: -1350px -816px;
}
.bg-club-373 {
  @include club(75px);
  background-position: -1125px -450px;
}
.bg-club-374 {
  @include club(48px);
  background-position: -1350px -912px;
}
.bg-club-375 {
  @include club(75px);
  background-position: -1125px -300px;
}
.bg-club-376 {
  @include club(48px);
  background-position: -1350px -1008px;
}
.bg-club-377 {
  @include club(75px);
  background-position: -1125px -150px;
}
.bg-club-378 {
  @include club(48px);
  background-position: -1350px -1104px;
}
.bg-club-379 {
  @include club(75px);
  background-position: -1125px -0;
}
.bg-club-380 {
  @include club(48px);
  background-position: -1350px -1200px;
}
.bg-club-381 {
  @include club(75px);
  background-position: -975px -1050px;
}
.bg-club-382 {
  @include club(48px);
  background-position: -0 -1323px;
}
.bg-club-383 {
  @include club(75px);
  background-position: -825px -1050px;
}
.bg-club-384 {
  @include club(48px);
  background-position: -96px -1323px;
}
.bg-club-385 {
  @include club(75px);
  background-position: -675px -1050px;
}
.bg-club-386 {
  @include club(48px);
  background-position: -192px -1323px;
}
.bg-club-387 {
  @include club(75px);
  background-position: -525px -1050px;
}
.bg-club-388 {
  @include club(48px);
  background-position: -288px -1323px;
}
.bg-club-389 {
  @include club(75px);
  background-position: -375px -1050px;
}
.bg-club-390 {
  @include club(48px);
  background-position: -384px -1323px;
}
.bg-club-391 {
  @include club(75px);
  background-position: -225px -1050px;
}
.bg-club-392 {
  @include club(48px);
  background-position: -480px -1323px;
}
.bg-club-393 {
  @include club(75px);
  background-position: -75px -1050px;
}
.bg-club-394 {
  @include club(48px);
  background-position: -576px -1323px;
}
.bg-club-395 {
  @include club(75px);
  background-position: -1050px -975px;
}
.bg-club-396 {
  @include club(48px);
  background-position: -672px -1323px;
}
.bg-club-397 {
  @include club(75px);
  background-position: -1050px -825px;
}
.bg-club-398 {
  @include club(48px);
  background-position: -768px -1323px;
}
.bg-club-399 {
  @include club(75px);
  background-position: -1050px -675px;
}
.bg-club-400 {
  @include club(48px);
  background-position: -864px -1323px;
}
.bg-club-401 {
  @include club(75px);
  background-position: -1050px -525px;
}
.bg-club-402 {
  @include club(48px);
  background-position: -960px -1323px;
}
.bg-club-403 {
  @include club(75px);
  background-position: -1050px -375px;
}
.bg-club-404 {
  @include club(48px);
  background-position: -1056px -1323px;
}
.bg-club-405 {
  @include club(75px);
  background-position: -1050px -225px;
}
.bg-club-406 {
  @include club(48px);
  background-position: -1152px -1323px;
}
.bg-club-407 {
  @include club(75px);
  background-position: -1050px -75px;
}
.bg-club-408 {
  @include club(48px);
  background-position: -1248px -1323px;
}
.bg-club-409 {
  @include club(75px);
  background-position: -975px -975px;
}
.bg-club-410 {
  @include club(48px);
  background-position: -1344px -1323px;
}
.bg-club-411 {
  @include club(75px);
  background-position: -825px -975px;
}
.bg-club-412 {
  @include club(48px);
  background-position: -1398px -48px;
}
.bg-club-413 {
  @include club(75px);
  background-position: -675px -975px;
}
.bg-club-414 {
  @include club(48px);
  background-position: -1398px -144px;
}
.bg-club-415 {
  @include club(75px);
  background-position: -525px -975px;
}
.bg-club-416 {
  @include club(48px);
  background-position: -1398px -240px;
}
.bg-club-417 {
  @include club(75px);
  background-position: -375px -975px;
}
.bg-club-418 {
  @include club(48px);
  background-position: -1398px -336px;
}
.bg-club-419 {
  @include club(75px);
  background-position: -225px -975px;
}
.bg-club-420 {
  @include club(48px);
  background-position: -1398px -432px;
}
.bg-club-421 {
  @include club(75px);
  background-position: -75px -975px;
}
.bg-club-422 {
  @include club(48px);
  background-position: -1398px -528px;
}
.bg-club-423 {
  @include club(75px);
  background-position: -975px -900px;
}
.bg-club-424 {
  @include club(48px);
  background-position: -1398px -624px;
}
.bg-club-425 {
  @include club(75px);
  background-position: -975px -750px;
}
.bg-club-426 {
  @include club(48px);
  background-position: -1398px -720px;
}
.bg-club-427 {
  @include club(75px);
  background-position: -975px -600px;
}
.bg-club-428 {
  @include club(48px);
  background-position: -1398px -816px;
}
.bg-club-429 {
  @include club(75px);
  background-position: -975px -450px;
}
.bg-club-430 {
  @include club(48px);
  background-position: -1398px -912px;
}
.bg-club-431 {
  @include club(75px);
  background-position: -975px -300px;
}
.bg-club-432 {
  @include club(48px);
  background-position: -1398px -1008px;
}
.bg-club-433 {
  @include club(75px);
  background-position: -975px -150px;
}
.bg-club-434 {
  @include club(48px);
  background-position: -1398px -1104px;
}
.bg-club-435 {
  @include club(75px);
  background-position: -975px -0;
}
.bg-club-436 {
  @include club(48px);
  background-position: -1398px -1200px;
}
.bg-club-437 {
  @include club(75px);
  background-position: -825px -900px;
}
.bg-club-438 {
  @include club(48px);
  background-position: -1398px -1296px;
}
.bg-club-439 {
  @include club(75px);
  background-position: -750px -900px;
}
.bg-club-440 {
  @include club(48px);
  background-position: -48px -1371px;
}
.bg-club-441 {
  @include club(75px);
  background-position: -675px -900px;
}
.bg-club-442 {
  @include club(48px);
  background-position: -144px -1371px;
}
.bg-club-443 {
  @include club(75px);
  background-position: -525px -900px;
}
.bg-club-444 {
  @include club(48px);
  background-position: -240px -1371px;
}
.bg-club-445 {
  @include club(75px);
  background-position: -450px -900px;
}
.bg-club-446 {
  @include club(48px);
  background-position: -336px -1371px;
}
.bg-club-447 {
  @include club(75px);
  background-position: -375px -900px;
}
.bg-club-448 {
  @include club(48px);
  background-position: -432px -1371px;
}
.bg-club-449 {
  @include club(75px);
  background-position: -300px -900px;
}
.bg-club-450 {
  @include club(48px);
  background-position: -528px -1371px;
}
.bg-club-451 {
  @include club(75px);
  background-position: -150px -900px;
}
.bg-club-452 {
  @include club(48px);
  background-position: -624px -1371px;
}
.bg-club-453 {
  @include club(75px);
  background-position: -0 -900px;
}
.bg-club-454 {
  @include club(48px);
  background-position: -720px -1371px;
}
.bg-club-455 {
  @include club(75px);
  background-position: -900px -825px;
}
.bg-club-456 {
  @include club(48px);
  background-position: -816px -1371px;
}
.bg-club-457 {
  @include club(75px);
  background-position: -900px -675px;
}
.bg-club-458 {
  @include club(48px);
  background-position: -912px -1371px;
}
.bg-club-459 {
  @include club(75px);
  background-position: -900px -600px;
}
.bg-club-460 {
  @include club(48px);
  background-position: -1008px -1371px;
}
.bg-club-461 {
  @include club(75px);
  background-position: -900px -525px;
}
.bg-club-462 {
  @include club(48px);
  background-position: -1104px -1371px;
}
.bg-club-463 {
  @include club(48px);
  background-position: -1152px -1371px;
}
.bg-club-464 {
  @include club(75px);
  background-position: -900px -375px;
}
.bg-club-465 {
  @include club(48px);
  background-position: -1248px -1371px;
}
.bg-club-466 {
  @include club(75px);
  background-position: -900px -225px;
}
.bg-club-467 {
  @include club(48px);
  background-position: -1344px -1371px;
}
.bg-club-468 {
  @include club(75px);
  background-position: -900px -75px;
}
.bg-club-469 {
  @include club(48px);
  background-position: -1446px -0;
}
.bg-club-470 {
  @include club(48px);
  background-position: -1446px -48px;
}
.bg-club-471 {
  @include club(75px);
  background-position: -825px -825px;
}
.bg-club-472 {
  @include club(48px);
  background-position: -1446px -144px;
}
.bg-club-473 {
  @include club(75px);
  background-position: -675px -825px;
}
.bg-club-474 {
  @include club(48px);
  background-position: -1446px -240px;
}
.bg-club-475 {
  @include club(75px);
  background-position: -525px -825px;
}
.bg-club-476 {
  @include club(48px);
  background-position: -1446px -336px;
}
.bg-club-477 {
  @include club(48px);
  background-position: -1446px -384px;
}
.bg-club-478 {
  @include club(75px);
  background-position: -375px -825px;
}
.bg-club-479 {
  @include club(48px);
  background-position: -1446px -480px;
}
.bg-club-480 {
  @include club(48px);
  background-position: -1446px -528px;
}
.bg-club-481 {
  @include club(75px);
  background-position: -225px -825px;
}
.bg-club-482 {
  @include club(48px);
  background-position: -1446px -624px;
}
.bg-club-483 {
  @include club(75px);
  background-position: -75px -825px;
}
.bg-club-484 {
  @include club(48px);
  background-position: -1446px -720px;
}
.bg-club-485 {
  @include club(48px);
  background-position: -1446px -768px;
}
.bg-club-486 {
  @include club(75px);
  background-position: -825px -750px;
}
.bg-club-487 {
  @include club(48px);
  background-position: -1446px -864px;
}
.bg-club-488 {
  @include club(75px);
  background-position: -825px -600px;
}
.bg-club-489 {
  @include club(48px);
  background-position: -1446px -960px;
}
.bg-club-490 {
  @include club(75px);
  background-position: -825px -450px;
}
.bg-club-491 {
  @include club(48px);
  background-position: -1446px -1056px;
}
.bg-club-492 {
  @include club(75px);
  background-position: -825px -300px;
}
.bg-club-493 {
  @include club(48px);
  background-position: -1446px -1152px;
}
.bg-club-494 {
  @include club(75px);
  background-position: -825px -150px;
}
.bg-club-495 {
  @include club(48px);
  background-position: -1446px -1248px;
}
.bg-club-496 {
  @include club(48px);
  background-position: -1446px -1296px;
}
.bg-club-497 {
  @include club(75px);
  background-position: -825px -0;
}
.bg-club-498 {
  @include club(48px);
  background-position: -0 -1419px;
}
.bg-club-499 {
  @include club(48px);
  background-position: -48px -1419px;
}
.bg-club-500 {
  @include club(48px);
  background-position: -96px -1419px;
}
.bg-club-501 {
  @include club(75px);
  background-position: -675px -750px;
}
.bg-club-502 {
  @include club(48px);
  background-position: -192px -1419px;
}
.bg-club-503 {
  @include club(75px);
  background-position: -525px -750px;
}
.bg-club-504 {
  @include club(48px);
  background-position: -288px -1419px;
}
.bg-club-505 {
  @include club(75px);
  background-position: -375px -750px;
}
.bg-club-506 {
  @include club(48px);
  background-position: -384px -1419px;
}
.bg-club-507 {
  @include club(48px);
  background-position: -432px -1419px;
}
.bg-club-508 {
  @include club(75px);
  background-position: -225px -750px;
}
.bg-club-509 {
  @include club(48px);
  background-position: -528px -1419px;
}
.bg-club-510 {
  @include club(48px);
  background-position: -576px -1419px;
}
.bg-club-511 {
  @include club(48px);
  background-position: -624px -1419px;
}
.bg-club-512 {
  @include club(48px);
  background-position: -672px -1419px;
}
.bg-club-513 {
  @include club(75px);
  background-position: -75px -750px;
}
.bg-club-514 {
  @include club(48px);
  background-position: -768px -1419px;
}
.bg-club-515 {
  @include club(75px);
  background-position: -750px -675px;
}
.bg-club-516 {
  @include club(48px);
  background-position: -864px -1419px;
}
.bg-club-517 {
  @include club(75px);
  background-position: -750px -525px;
}
.bg-club-518 {
  @include club(48px);
  background-position: -960px -1419px;
}
.bg-club-519 {
  @include club(75px);
  background-position: -750px -375px;
}
.bg-club-520 {
  @include club(48px);
  background-position: -1056px -1419px;
}
.bg-club-521 {
  @include club(75px);
  background-position: -750px -225px;
}
.bg-club-522 {
  @include club(48px);
  background-position: -1152px -1419px;
}
.bg-club-523 {
  @include club(75px);
  background-position: -750px -75px;
}
.bg-club-524 {
  @include club(48px);
  background-position: -1248px -1419px;
}
.bg-club-525 {
  @include club(75px);
  background-position: -675px -675px;
}
.bg-club-526 {
  @include club(48px);
  background-position: -1344px -1419px;
}
.bg-club-527 {
  @include club(75px);
  background-position: -525px -675px;
}
.bg-club-528 {
  @include club(48px);
  background-position: -1440px -1419px;
}
.bg-club-529 {
  @include club(75px);
  background-position: -375px -675px;
}
.bg-club-530 {
  @include club(48px);
  background-position: -1494px -48px;
}
.bg-club-531 {
  @include club(75px);
  background-position: -225px -675px;
}
.bg-club-532 {
  @include club(48px);
  background-position: -1494px -144px;
}
.bg-club-533 {
  @include club(75px);
  background-position: -75px -675px;
}
.bg-club-534 {
  @include club(48px);
  background-position: -1494px -240px;
}
.bg-club-535 {
  @include club(75px);
  background-position: -675px -600px;
}
.bg-club-536 {
  @include club(48px);
  background-position: -1494px -336px;
}
.bg-club-537 {
  @include club(75px);
  background-position: -675px -450px;
}
.bg-club-538 {
  @include club(48px);
  background-position: -1494px -432px;
}
.bg-club-539 {
  @include club(75px);
  background-position: -675px -300px;
}
.bg-club-540 {
  @include club(48px);
  background-position: -1494px -528px;
}
.bg-club-541 {
  @include club(75px);
  background-position: -675px -150px;
}
.bg-club-542 {
  @include club(48px);
  background-position: -1494px -624px;
}
.bg-club-543 {
  @include club(75px);
  background-position: -675px -0;
}
.bg-club-544 {
  @include club(48px);
  background-position: -1494px -720px;
}
.bg-club-545 {
  @include club(75px);
  background-position: -525px -600px;
}
.bg-club-546 {
  @include club(48px);
  background-position: -1494px -816px;
}
.bg-club-547 {
  @include club(75px);
  background-position: -375px -600px;
}
.bg-club-548 {
  @include club(48px);
  background-position: -1494px -912px;
}
.bg-club-549 {
  @include club(75px);
  background-position: -225px -600px;
}
.bg-club-550 {
  @include club(48px);
  background-position: -1494px -1008px;
}
.bg-club-551 {
  @include club(75px);
  background-position: -75px -600px;
}
.bg-club-552 {
  @include club(48px);
  background-position: -1494px -1104px;
}
.bg-club-553 {
  @include club(75px);
  background-position: -600px -525px;
}
.bg-club-554 {
  @include club(48px);
  background-position: -1494px -1200px;
}
.bg-club-555 {
  @include club(75px);
  background-position: -600px -375px;
}
.bg-club-556 {
  @include club(48px);
  background-position: -1494px -1296px;
}
.bg-club-557 {
  @include club(75px);
  background-position: -600px -225px;
}
.bg-club-558 {
  @include club(48px);
  background-position: -1494px -1392px;
}
.bg-club-559 {
  @include club(75px);
  background-position: -600px -75px;
}
.bg-club-560 {
  @include club(48px);
  background-position: -48px -1467px;
}
.bg-club-561 {
  @include club(75px);
  background-position: -525px -525px;
}
.bg-club-562 {
  @include club(48px);
  background-position: -144px -1467px;
}
.bg-club-563 {
  @include club(75px);
  background-position: -375px -525px;
}
.bg-club-564 {
  @include club(48px);
  background-position: -240px -1467px;
}
.bg-club-565 {
  @include club(75px);
  background-position: -225px -525px;
}
.bg-club-566 {
  @include club(48px);
  background-position: -336px -1467px;
}
.bg-club-567 {
  @include club(75px);
  background-position: -75px -525px;
}
.bg-club-568 {
  @include club(48px);
  background-position: -432px -1467px;
}
.bg-club-569 {
  @include club(75px);
  background-position: -525px -450px;
}
.bg-club-570 {
  @include club(48px);
  background-position: -528px -1467px;
}
.bg-club-571 {
  @include club(75px);
  background-position: -525px -300px;
}
.bg-club-572 {
  @include club(48px);
  background-position: -624px -1467px;
}
.bg-club-573 {
  @include club(75px);
  background-position: -525px -150px;
}
.bg-club-574 {
  @include club(48px);
  background-position: -720px -1467px;
}
.bg-club-575 {
  @include club(75px);
  background-position: -525px -0;
}
.bg-club-576 {
  @include club(48px);
  background-position: -816px -1467px;
}
.bg-club-577 {
  @include club(75px);
  background-position: -375px -450px;
}
.bg-club-578 {
  @include club(48px);
  background-position: -912px -1467px;
}
.bg-club-579 {
  @include club(75px);
  background-position: -225px -450px;
}
.bg-club-580 {
  @include club(48px);
  background-position: -1008px -1467px;
}
.bg-club-581 {
  @include club(75px);
  background-position: -75px -450px;
}
.bg-club-582 {
  @include club(48px);
  background-position: -1104px -1467px;
}
.bg-club-583 {
  @include club(75px);
  background-position: -450px -375px;
}
.bg-club-584 {
  @include club(48px);
  background-position: -1200px -1467px;
}
.bg-club-585 {
  @include club(75px);
  background-position: -450px -225px;
}
.bg-club-586 {
  @include club(48px);
  background-position: -1296px -1467px;
}
.bg-club-587 {
  @include club(75px);
  background-position: -450px -75px;
}
.bg-club-588 {
  @include club(48px);
  background-position: -1392px -1467px;
}
.bg-club-589 {
  @include club(75px);
  background-position: -375px -375px;
}
.bg-club-590 {
  @include club(48px);
  background-position: -1488px -1467px;
}
.bg-club-591 {
  @include club(75px);
  background-position: -225px -375px;
}
.bg-club-592 {
  @include club(48px);
  background-position: -1542px -48px;
}
.bg-club-593 {
  @include club(75px);
  background-position: -75px -375px;
}
.bg-club-594 {
  @include club(48px);
  background-position: -1542px -144px;
}
.bg-club-595 {
  @include club(75px);
  background-position: -375px -300px;
}
.bg-club-596 {
  @include club(48px);
  background-position: -1542px -240px;
}
.bg-club-597 {
  @include club(75px);
  background-position: -375px -150px;
}
.bg-club-598 {
  @include club(48px);
  background-position: -1542px -336px;
}
.bg-club-599 {
  @include club(75px);
  background-position: -375px -0;
}
.bg-club-600 {
  @include club(48px);
  background-position: -1542px -432px;
}
.bg-club-601 {
  @include club(75px);
  background-position: -225px -300px;
}
.bg-club-602 {
  @include club(48px);
  background-position: -1542px -528px;
}
.bg-club-603 {
  @include club(75px);
  background-position: -75px -300px;
}
.bg-club-604 {
  @include club(48px);
  background-position: -1542px -624px;
}
.bg-club-605 {
  @include club(75px);
  background-position: -300px -225px;
}
.bg-club-606 {
  @include club(48px);
  background-position: -1542px -720px;
}
.bg-club-607 {
  @include club(75px);
  background-position: -300px -75px;
}
.bg-club-608 {
  @include club(48px);
  background-position: -1542px -816px;
}
.bg-club-609 {
  @include club(75px);
  background-position: -225px -225px;
}
.bg-club-610 {
  @include club(48px);
  background-position: -1542px -912px;
}
.bg-club-611 {
  @include club(48px);
  background-position: -1542px -960px;
}
.bg-club-612 {
  @include club(48px);
  background-position: -1542px -1008px;
}
.bg-club-613 {
  @include club(75px);
  background-position: -75px -225px;
}
.bg-club-614 {
  @include club(48px);
  background-position: -1542px -1104px;
}
.bg-club-615 {
  @include club(48px);
  background-position: -1542px -1152px;
}
.bg-club-616 {
  @include club(48px);
  background-position: -1542px -1200px;
}
.bg-club-617 {
  @include club(48px);
  background-position: -1542px -1248px;
}
.bg-club-618 {
  @include club(48px);
  background-position: -1542px -1296px;
}
.bg-club-619 {
  @include club(48px);
  background-position: -1542px -1344px;
}
.bg-club-010 {
  @include club(48px);
  background-position: -1542px -1392px;
}
.bg-club-011 {
  @include club(75px);
  background-position: -225px -150px;
}
.bg-club-012 {
  @include club(48px);
  background-position: -0 -1515px;
}
.bg-club-013 {
  @include club(75px);
  background-position: -225px -0;
}
.bg-club-014 {
  @include club(48px);
  background-position: -96px -1515px;
}
.bg-club-015 {
  @include club(75px);
  background-position: -75px -150px;
}
.bg-club-016 {
  @include club(48px);
  background-position: -192px -1515px;
}
.bg-club-017 {
  @include club(75px);
  background-position: -150px -75px;
}
.bg-club-018 {
  @include club(48px);
  background-position: -288px -1515px;
}
.bg-club-019 {
  @include club(75px);
  background-position: -75px -75px;
}
.bg-club-020 {
  @include club(48px);
  background-position: -384px -1515px;
}
.bg-club-021 {
  @include club(75px);
  background-position: -75px -0;
}
.bg-club-167 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -0px -0px;
}
.bg-club-170 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -50px -0px;
}
.bg-club-172 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -100px -0px;
}
.bg-club-174 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -150px -0px;
}
.bg-club-181 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -0px -50px;
}
.bg-club-185 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -50px -50px;
}
.bg-club-620 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -100px -50px;
}
.bg-club-621 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -150px -50px;
}
.bg-club-622 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -0px -100px;
}
.bg-club-623 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -50px -100px;
}
.bg-club-624 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -100px -100px;
}
.bg-club-625 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -150px -100px;
}
.bg-club-626 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -0px -150px;
}
.bg-club-627 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -50px -150px;
}
.bg-club-628 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -100px -150px;
}
.bg-club-629 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -150px -150px;
}
.bg-club-630 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -0px -200px;
}
.bg-club-631 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -50px -200px;
}
.bg-club-632 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -100px -200px;
}
.bg-club-177 {
  @include club(50px,"../assets/club-sprite-2.png");
  background-position: -150px -200px;
}
.bg-club-351 {
  @include club(50px,"../assets/club-sprite-3.png");
  background-position: -0 -0;
}
.bg-club-314 {
  @include club(50px,"../assets/club-sprite-3.png");
  background-position: -50px -0;
}
.bg-club-317 {
  @include club(50px,"../assets/club-sprite-3.png");
  background-position: -0 -50px;
}
.bg-club-161 {
  @include club(50px,"../assets/club-sprite-3.png");
  background-position: -50px -50px;
}
</style>

